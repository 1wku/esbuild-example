//require('esbuild').build({
//    entryPoints: ['app.jsx'],
//    bundle: true,
//    outfile: 'out.js',
//}).catch(() => process.exit(1))

const a = require("esbuild").transformSync(
    "let x: number = 1",
    {
        loader: "ts",
    }
);

console.log(a);
