const fs = require("fs-extra");
const { build } = require("esbuild");

(() => {
  try {
    fs.removeSync("dist");
    fs.copySync("public", "dist");

    build({
      entryPoints: ["src/index.tsx"],
      loader: { ".ts": "tsx" },
      // outdir: "dist",
      outfile: "dist/bundle.js",
      bundle: true,
      minify: true,
      sourcemap: false,
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
