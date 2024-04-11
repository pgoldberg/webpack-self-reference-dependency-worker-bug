## Bug explanation

When a worker imports a cjs module with a self reference dependency, webpack throws this error from `CommonJsSelfReferenceDependency`:

```bash
ERROR in ./selfReference.js
Self-reference dependency has unused export name: This should not happen
Error: Self-reference dependency has unused export name: This should not happen
    at CommonJsSelfReferenceDependencyTemplate.apply (/Volumes/git/webpack-worker-commonjs-bug/node_modules/.pnpm/webpack@5.90.0_webpack-cli@4.9.2/node_modules/webpack/lib/dependencies/CommonJsSelfReferenceDependency.js:118:10)
    at JavascriptGenerator.sourceDependency (/Volumes/git/webpack-worker-commonjs-bug/node_modules/.pnpm/webpack@5.90.0_webpack-cli@4.9.2/node_modules/webpack/lib/javascript/JavascriptGenerator.js:221:12)
    at JavascriptGenerator.sourceModule (/Volumes/git/webpack-worker-commonjs-bug/node_modules/.pnpm/webpack@5.90.0_webpack-cli@4.9.2/node_modules/webpack/lib/javascript/JavascriptGenerator.js:112:9)
    at JavascriptGenerator.generate (/Volumes/git/webpack-worker-commonjs-bug/node_modules/.pnpm/webpack@5.90.0_webpack-cli@4.9.2/node_modules/webpack/lib/javascript/JavascriptGenerator.js:98:8)
    at NormalModule.codeGeneration (/Volumes/git/webpack-worker-commonjs-bug/node_modules/.pnpm/webpack@5.90.0_webpack-cli@4.9.2/node_modules/webpack/lib/NormalModule.js:1209:22)
    at /Volumes/git/webpack-worker-commonjs-bug/node_modules/.pnpm/webpack@5.90.0_webpack-cli@4.9.2/node_modules/webpack/lib/Compilation.js:3345:22
    at /Volumes/git/webpack-worker-commonjs-bug/node_modules/.pnpm/webpack@5.90.0_webpack-cli@4.9.2/node_modules/webpack/lib/Cache.js:93:5
    at Hook.eval [as callAsync] (eval at create (/Volumes/git/webpack-worker-commonjs-bug/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at Cache.get (/Volumes/git/webpack-worker-commonjs-bug/node_modules/.pnpm/webpack@5.90.0_webpack-cli@4.9.2/node_modules/webpack/lib/Cache.js:75:18)
    at ItemCacheFacade.get (/Volumes/git/webpack-worker-commonjs-bug/node_modules/.pnpm/webpack@5.90.0_webpack-cli@4.9.2/node_modules/webpack/lib/CacheFacade.js:115:15)
 @ ./worker.js 1:0-38 3:0-3
 @ ./index.js 2:2-50
```

## How to run

```bash
pnpm install
pnpm run start
```
