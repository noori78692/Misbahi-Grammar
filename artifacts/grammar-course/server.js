import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

const port = Number(process.env.PORT || 3000);
const baseDir = path.resolve(process.cwd(), "dist");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".ttf": "font/ttf",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    "Content-Type": "text/html; charset=utf-8",
    ...headers
  });
  res.end(body);
}

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = mimeTypes[ext] || "application/octet-stream";
  const stream = fs.createReadStream(filePath);
  stream.on("error", () => send(res, 404, "Not found"));
  res.writeHead(200, { "Content-Type": type });
  stream.pipe(res);
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url || "/");
  const pathname = decodeURIComponent(parsed.pathname || "/");
  const safePath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.join(baseDir, safePath);

  if (!filePath.startsWith(baseDir)) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isFile()) {
      serveFile(res, filePath);
      return;
    }

    const indexPath = path.join(baseDir, "index.html");
    fs.readFile(indexPath, "utf8", (indexErr, data) => {
      if (indexErr) {
        send(res, 500, "Missing build output. Run npm run build first.");
        return;
      }
      send(res, 200, data, { "Content-Type": "text/html; charset=utf-8" });
    });
  });
});

server.listen(port, "0.0.0.0");