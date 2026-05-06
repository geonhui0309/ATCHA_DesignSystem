const fs = require("fs");
const path = require("path");
const vm = require("vm");

const rawPath = path.resolve(__dirname, "../build/js/tokens.raw.js");
const outPath = path.resolve(__dirname, "../build/js/tokens.js");
const cssPath = path.resolve(__dirname, "../build/css/tokens.css");

const source = fs.readFileSync(rawPath, "utf8");
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(`${source}\nthis.__TOKENS__ = _styleDictionary;`, sandbox);

const raw = sandbox.__TOKENS__;

function toValues(node) {
  if (node && typeof node === "object") {
    if (Object.prototype.hasOwnProperty.call(node, "$value")) {
      return node.$value;
    }

    const result = {};
    for (const [key, value] of Object.entries(node)) {
      if (key.startsWith("$")) continue;
      if (["name", "path", "attributes", "original", "filePath", "isSource", "comment", "key"].includes(key)) continue;

      const mapped = toValues(value);
      if (mapped !== undefined && !(typeof mapped === "object" && mapped && Object.keys(mapped).length === 0)) {
        result[key] = mapped;
      }
    }
    return result;
  }

  return node;
}

function replaceRemWithPx(node) {
  if (typeof node === "string") {
    return node.replace(/(-?\d*\.?\d+)rem\b/g, "$1px");
  }

  if (Array.isArray(node)) {
    return node.map(replaceRemWithPx);
  }

  if (node && typeof node === "object") {
    const result = {};
    for (const [key, value] of Object.entries(node)) {
      result[key] = replaceRemWithPx(value);
    }
    return result;
  }

  return node;
}

const tokens = replaceRemWithPx(toValues(raw));
const content = `/**
 * Do not edit directly, this file was auto-generated.
 */

export const tokens = ${JSON.stringify(tokens, null, 2)};

export default tokens;
`;

fs.writeFileSync(outPath, content);
console.log(`Wrote ${outPath}`);

if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, "utf8");
  const remToPxCss = css.replace(/(-?\d*\.?\d+)rem\b/g, "$1px");
  const normalizedCss = remToPxCss.replace(
    /(\s--(?:font-size|typography-fontsize)[a-z0-9-]*:\s*)(-?\d*\.?\d+);/gi,
    "$1$2px;"
  );
  const pxCss = normalizedCss;
  fs.writeFileSync(cssPath, pxCss);
  console.log(`Converted rem to px in ${cssPath}`);
}

if (fs.existsSync(rawPath)) {
  fs.unlinkSync(rawPath);
  console.log(`Removed intermediate file ${rawPath}`);
}
