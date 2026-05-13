import http from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "storybook-static");
const host = "127.0.0.1";
const port = Number(process.env.PORT || 6011);

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2"
};

http
  .createServer((req, res) => {
    const urlPath = new URL(req.url || "/", `http://${host}:${port}`).pathname;
    const safePath = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, "");
    let filePath = join(root, safePath);

    if (safePath === "/") {
      filePath = join(root, "index.html");
    }

    if (!existsSync(filePath)) {
      res.writeHead(404, {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0"
      });
      res.end("Not Found");
      return;
    }

    const stats = statSync(filePath);
    if (stats.isDirectory()) {
      filePath = join(filePath, "index.html");
    }

    const ext = extname(filePath);
    res.writeHead(200, {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0"
    });

    createReadStream(filePath).pipe(res);
  })
  .listen(port, host, () => {
    console.log(`Storybook static server running at http://${host}:${port}`);
  });
