import esbuild from "esbuild";
import inlineImage from "esbuild-plugin-inline-image";
import time from "esbuild-plugin-time";

// (async () => {
//   const result = await esbuild.build({
//     // 入口文件列表
//     entryPoints: ["src/App.tsx", "src/index.html"],
//     // 输出文件
//     outdir: "./public/dist",
//     // 是否需要打包
//     bundle: true,
//     // 是否需要压缩
//     minify: false,
//     // 是否需要sourcemap
//     sourcemap: true,
//     // 指定语言版本和目标浏览器版本
//     target: ["es2020", "chrome58", "firefox57", "safari11"],
//     // 是否需要打包生成元信息
//     metafile: true,
//     // 指定loader
//     loader: {
//       ".html": "copy",
//       // ".jpg": "dataurl",
//       ".module.css": "local-css",
//     },
//     plugins: [inlineImage()],
//   });

//   console.log(result);

//   //打印详细的元信息
//   const text = await esbuild.analyzeMetafile(result.metafile, {
//     verbose: true,
//   });

//   console.log(text);
// })();

(async () => {
  const ctx = await esbuild.context({
    // 入口文件列表
    entryPoints: ["src/App.tsx", "src/index.html"],
    // 输出文件
    outdir: "/dist",
    // 是否需要打包
    bundle: true,
    // 是否需要压缩
    minify: false,
    // 是否需要sourcemap
    sourcemap: true,
    // 指定语言版本和目标浏览器版本
    target: ["es2020", "chrome58", "firefox57", "safari11"],
    // 是否需要打包生成元信息
    metafile: true,
    // 指定loader
    loader: {
      ".html": "copy",
      // ".jpg": "dataurl",
      ".module.css": "local-css",
    },
    plugins: [inlineImage(), time()],
  });

  await ctx.watch();

  ctx
    .serve({
      port: 8080,
      host: "localhost",
      servedir: "./dist",
    })
    .then((server) => {
      console.log(`server is running at http://${server.host}:${server.port}`);
    });
})();
