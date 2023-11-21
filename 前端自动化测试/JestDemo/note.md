# Jest 快速入门

- 初始化项目

  `npm init -y`

```
/**
 * 工具库
 */

exports.sum = function (a, b) {
  return a + b;
};

exports.sub = function (a, b) {
  return a - b;
};

exports.mul = function (a, b) {
  return a * b;
};

exports.div = function (a, b) {
  return a / b;
};

```

- 安装 Jest

  `npm install --save-dev jest`

  > 在项目下面创建测试文件 `tools.test.js`,安装了 jest 之后，会提供一些全局方法或对象 例如：`test、expect、jest`，这些方法或对象不需要导入，直接在测试文件中使用

  ```
    const { sum, sub, mul, div } = require("./tools");

    /**
    * 一个test 方法
    */
    test("测试加法", () => {
    expect(sum(1, 2)).toBe(3);
    });

    test("测试减法", () => {
    expect(sub(5, 3)).toBe(2);
    });

    /**
    * it函数就是test函数的别名
    */
    it("测试乘法", () => {
    expect(mul(2, 6)).toBe(12);
    });

    it("测试除法", () => {
    expect(div(100, 2)).toBe(50);
    });
  ```

  > 修改 `package.json` 文件

  ```
  ...
  "scripts": {
    "test": "jest"
  },
  ...
  ```

  ```
    npm run test

    > JestDemo@1.0.0 test E:\workspace\fremawork-path\前端自动化测试\JestDemo
    > jest

    PASS  ./tools.test.js
    √ 测试加法 (3 ms)
    √ 测试减法 (1 ms)
    √ 测试乘法
    √ 测试除法 (1 ms)

    Test Suites: 1 passed, 1 total
    Tests:       4 passed, 4 total
    Snapshots:   0 total
    Time:        0.548 s, estimated 1 s
    Ran all test suites.
  ```
> 最好的方式使一个工具函数对应一个测试套件，每个测试套件里面根据函数的参数来书写测试用例，一个参数对应一个测速用例。


## 测试用例的分组
> 在一个测试套件中，可以针对不同的测试用例来进行分组。

> 分组使用 `describe` 函数，这个函数也是一个全局函数，不需要导入，直接使用。
```
descrbe('分组名称的描述'，回调函数)
示例如下：
describe("这是一组测试，测试加减法", () => {
  // 回调函数中就放一个一个的测试用例
  test("测试加法", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("测试减法", () => {
    expect(sub(5, 3)).toBe(2);
  });
});

describe("这是一组测试，测试乘除法", () => {
  // 回调函数中就放一个一个的测试用例
  it("测试乘法", () => {
    expect(mul(2, 6)).toBe(12);
  });

  it("测试除法", () => {
    expect(div(100, 2)).toBe(50);
  });
});
```