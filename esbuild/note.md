# **Esbuild**

esbuild 的优点：

- 极速打包 （跟 tsc、webpack 对比）
- 支持 es6 模块
- 支持 tree-shaking
- 支持 jsx

## 打包速度对比：

- webpack: 2.5s
- esbuild: 0.5s

## esbuild 的缺点：

- 不支持 es5，所以需要 babel 转换

## 跟 webpack 的区别:

- runtime
  > webpack: 会把所有的代码都打包到一个文中，包括 webpack 的 runtime，所以每次打包会生成一个新的 runtime，导致缓存失效
  >
  > esbuild: 会把所有的代码都打包到一个文中，但是不会打包 runtime，所以每次打包不会生成一个新的 runtime，导致缓存生效

## esbuild 的使用

- 安装
  `npm i esbuild -D`
- 打包
  `npx esbuild .\src\index.ts --outdir=dist/`
- bundle
  `npx esbuild .\src\index.ts --outdir=dist/ --bundle`
- 代码压缩
  `npx esbuild .\src\index.ts --outdir=dist/ --bundle --minify`

### 打包压缩 react 工程

```js
npx esbuild .\src\App.tsx --outfile=dist/App.js --bundle --minify
```

- 打包 ts 文件
  esbuild 打包 ts 文件为 tsx

```
npx esbuild .\src\TestComp.ts --outfile=dist/TestComp.js --bundle --loader:.ts=tsx
```

- 以模块化方式导入图片

  - 配置 tsconfig.json

    ```json
    {
      "compilerOptions": {
        "esModuleInterop": true, // 允许使用es6的模块语法
        "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入
        "jsx": "react-jsx", // 这里的react-jsx代表react的jsx语法
        "baseUrl": "./", // 这里的./代表当前目录
        "paths": {
          "@/*": [
            // 这里的@符号代表src目录
            "src/*"
          ]
        }
      }
    }
    ```

## 使用 esbuild 配置打包 react 工程

- 项目工程目录下创建`esbuild.config.mjs`文件

```json
import esbuild from "esbuild";

esbuild.build({
  // 入口文件列表
  entryPoints: ["src/App.tsx"],
  // 输出文件列表
  outdir: "./public/dist/App.js",
  // 是否需要打包
  bundle: true,
  // 是否需要压缩
  minify: false,
  // 是否需要sourcemap
  sourcemap: true,
  // 指定语言版本和目标浏览器版本
  target: ["es2020", "chrome58", "firefox57", "safari11"],
  // 指定loader
  loader: {
    ".jpg": "dataurl",
  },
});
```

- 运行打包
  `node .\esbuild.config.mjs`

- 增加 index.html 文件运行

  - 创建 html 文件 项目根目录/public/dist/`index.html`文件

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div id="root"></div>
    </body>
    <script src="./App.js"></script>
  </html>
  ```

  - 添加 App.tsx 文件内容

  ```js
  import React from "react";
  import ReactDOM from "react-dom/client";
  import Comp1 from "./components/Comp1";
  import Comp2 from "./components/Comp2";

  const App = () => (
    <div>
      <h1>Hello world</h1>
      <Comp1 />
      <Comp2 />
    </div>
  );

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  ```

  - 运行打包
    `node .\esbuild.config.mjs`
  - 运行项目

    - 安装 http-server
      `npm i http-server -D`

      ` http-server -o -c-1`

    - `npx serve public`

  - 使用 esbuild 构建工具中的开发服务器 与 热更新

    ```js
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
        // 是否需要 sourcemap
        sourcemap: true,
        // 指定语言版本和目标浏览器版本
        target: ["es2020", "chrome58", "firefox57", "safari11"],
        // 是否需要打包生成元信息
        metafile: true,
        // 指定 loader
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
          console.log(
            `server is running at http://${server.host}:${server.port}`
          );
        });
    })();
    ```

## react 工程 使用 esbuild

- 创建 react 工程 `npx create-react-app project-name` -根目录添加 `esbuild.config.mjs`文件

```js
import esbuild from "esbuild";
import inlineImage from "esbuild-plugin-inline-image";
import time from "esbuild-plugin-time";

(async () => {
  const ctx = await esbuild.context({
    // 入口文件列表
    entryPoints: ["src/index.js"],
    // 输出目录
    outdir: "/public",
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
      ".js": "jsx",
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
      servedir: "./public",
    })
    .then((server) => {
      console.log(`server is running at http://${server.host}:${server.port}`);
    });
})();
```

- 修改根目录/public/index.html 文件内容
  - 删除 `%PUBLIC_URL%` 替换为正确路径
  - 添加 script 引入`index.js`文件
  ```html
  <script src="index.js"></script>
  <script>
    new EventSource("/esbuild").addEventListener("change", () =>
      location.reload()
    );
  </script>
  ```
- scr/App.js 导入 React

```js
import React from "react";
```
