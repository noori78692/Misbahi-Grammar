const CACHE_NAME = "misbahi-grammar-v1";

const STATIC_ASSETS = [
  "/",
  "/manifest.json",
  "/logo.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  if (
    url.origin !== self.location.origin ||
    url.pathname.startsWith("/api/")
  ) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(event.request);
      if (cached) return cached;

      try {
        const networkResponse = await fetch(event.request);
        if (
          networkResponse.ok &&
          event.request.url.startsWith(self.location.origin)
        ) {
          cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      } catch {
        if (event.request.headers.get("accept")?.includes("text/html")) {
          const cachedRoot = await cache.match("/");
          if (cachedRoot) return cachedRoot;
        }
        return new Response("Offline — please reconnect.", {
          status: 503,
          headers: { "Content-Type": "text/plain" },
        });
      }
    })
  );
});
