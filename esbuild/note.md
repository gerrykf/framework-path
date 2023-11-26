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
