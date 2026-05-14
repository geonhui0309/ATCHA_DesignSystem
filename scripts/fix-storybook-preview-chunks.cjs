const fs = require("node:fs");
const path = require("node:path");

const rootDir = process.cwd();
const assetsDir = path.join(rootDir, "storybook-static", "assets");

if (!fs.existsSync(assetsDir)) {
  process.exit(0);
}

const iframeFile = fs
  .readdirSync(assetsDir)
  .find((file) => file.startsWith("iframe-") && file.endsWith(".js"));

if (!iframeFile) {
  process.exit(0);
}

const iframeSource = fs.readFileSync(path.join(assetsDir, iframeFile), "utf8");
const previewChunkMatches = iframeSource.match(/preview-[A-Za-z0-9_-]+\.js/g) ?? [];
const previewChunkNames = [...new Set(previewChunkMatches)];

for (const chunkName of previewChunkNames) {
  const chunkPath = path.join(assetsDir, chunkName);

  if (!fs.existsSync(chunkPath)) {
    fs.writeFileSync(chunkPath, "export {};\n", "utf8");
  }
}
