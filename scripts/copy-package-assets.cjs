const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const distRoot = path.join(projectRoot, "dist");

const copyExtensions = new Set([".css", ".svg", ".png"]);
const copyDirectories = ["components", "icons"];
const copyFiles = [
  ["build/css/tokens.css", "build/css/tokens.css"]
];

function ensureDirectory(targetPath) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
}

function copyRecursive(relativeDir) {
  const sourceDir = path.join(projectRoot, relativeDir);
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const relativePath = path.relative(projectRoot, sourcePath);
    const targetPath = path.join(distRoot, relativePath);

    if (entry.isDirectory()) {
      copyRecursive(relativePath);
      continue;
    }

    if (!copyExtensions.has(path.extname(entry.name))) {
      continue;
    }

    ensureDirectory(targetPath);
    fs.copyFileSync(sourcePath, targetPath);
  }
}

for (const relativeDir of copyDirectories) {
  copyRecursive(relativeDir);
}

for (const [from, to] of copyFiles) {
  const sourcePath = path.join(projectRoot, from);
  const targetPath = path.join(distRoot, to);
  ensureDirectory(targetPath);
  fs.copyFileSync(sourcePath, targetPath);
}
