HOSTINGER DEPLOYMENT

1) Build the app:
   npm install
   npm run build

2) Upload these folders/files to Hostinger:
   - dist/
   - server.js
   - package.json
   - public/

3) In Hostinger Node.js setup:
   - Start file: server.js
   - Node version: 18+ 
   - Port: use the value Hostinger provides in PORT

4) If Hostinger expects a document root:
   - point it to dist/

5) Keep public/favicon.svg and public/logo.png in place.