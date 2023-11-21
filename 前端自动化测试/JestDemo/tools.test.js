/**
 * 该文件是一个测试文件
 * 在该文件中，书写一个个测试用例
 * test、expect、jest
 */

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
