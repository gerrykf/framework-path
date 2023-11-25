/**
 * 该文件是一个测试文件
 * 在该文件中，书写一个个测试用例
 * test、expect、jest
 */

const { sum, sub, mul, div } = require("./tools");

/**
 * 一个test 方法
 */
// test("测试加法", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test("测试减法", () => {
//   expect(sub(5, 3)).toBe(2);
// });

// /**
//  * it函数就是test函数的别名
//  */
// it("测试乘法", () => {
//   expect(mul(2, 6)).toBe(12);
// });

// it("测试除法", () => {
//   expect(div(100, 2)).toBe(50);
// });

// describe("这是一组测试，测试加减法", () => {
//   // 回调函数中就放一个一个的测试用例
//   test("测试加法", () => {
//     expect(sum(1, 2)).toBe(3);
//   });

//   test("测试减法", () => {
//     expect(sub(5, 3)).toBe(2);
//   });
// });

// describe("这是一组测试，测试乘除法", () => {
//   // 回调函数中就放一个一个的测试用例
//   it("测试乘法", () => {
//     expect(mul(2, 6)).toBe(12);
//   });

//   it("测试除法", () => {
//     expect(div(100, 2)).toBe(50);
//   });
// });

// test("测试.not修饰符",()=>{
//   expect(sum(3+3)).not.toBe(5);
// });

// test("深度比较对象", () => {
//   const stu = { name: "张三", score: { html: 100, css: 90 } };

//   expect(stu).toBe({ name: "张三", score: { html: 100, css: 90 } });
// });

// test("深度比较对象", () => {
//   const stu = { name: "张三", score: { html: 100, css: 90 } };

//   // 使用 toEqual 来进行深度比较
//   // toEqual 会递归比较对象的所有属性
//   expect(stu).toEqual({ name: "张三", score: { html: 100, css: 90 } });
// });

// test("布尔值相关匹配器", () => {
//   const n = null;
//   expect(n).toBeFalsy();
//   expect(n).not.toBeTruthy();
// });

// test("无参数匹配器", () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
// });

// test("数值相关匹配器", () => {
//   const n = 4;

//   // 大于
//   expect(n).toBeGreaterThan(3);
//   // 大于等于
//   expect(n).toBeGreaterThanOrEqual(4);
//   // 小于
//   expect(n).toBeLessThan(5);
//   // 小于等于
//   expect(n).toBeLessThanOrEqual(4);
//   // 等于
//   // 这里需要注意一下浮点数
//   const n2 = 0.1 + 0.2;
//   // expect(n2).toBe(0.3); // Expected: 0.3 Received: 0.30000000000000004
//   expect(n2).toBeCloseTo(0.3);//Test Suites: 1 passed, 1 total
//   // toBeCloseTo还接收第二个参数，用于指定位数，默认两位
//   expect(0.302).toBeCloseTo(0.3,2);
// });

// test("字符串相关匹配器", () => {
//   expect("this is a test").toMatch(/test/);
//   expect("this is a test").not.toMatch(/abc/);
// });

// test("数组相关匹配器", () => {
//   const shoppingList = ["apple", "milk", "water", "paper"];
//   expect(shoppingList).toContain("water");
//   // toContain 进行的是全等于比较，也就是比较严格
//   expect([1, 2, 3]).not.toContain("1");
//   expect({ name: "张三" }).not.toContain({ name: "张三" });
//   //toContain 还可以检测 一个字符串是否是另一个字符串的子串
//   expect("this is a test").toContain("test");
//   // 也可以用到集合（set）里面
//   expect(new Set(shoppingList)).toContain("water");
// });

// const compileCode = () => {
//   throw new Error("You're throwing an error.");
// };

// test("异常相关匹配器", () => {
//   expect(() => compileCode()).toThrow();
//   // toThrow 里面可以传递不同的参数
//   // 字符串 判断异常中是否包含该子串
//   expect(() => compileCode()).toThrow("throwing");
//   // 异常对象
//   expect(() => compileCode()).toThrow(Error);
//   // 正则
//   expect(() => compileCode()).toThrow(/error/);
// });

// const arr = ["张三"];
// test("上面的数组不包含某一项", () => {
//   // toEqual(参数中属于一段描述：期望数组中不包含arr中的值)
//   expect(["李四", "王五"]).toEqual(expect.not.arrayContaining(arr));
// });

// const obj = { name: "张三" };
// test("对象不包含上面的键值对", () => {
//   expect({ name: "李四" }).toEqual(expect.not.objectContaining(obj));
// });

// beforeAll(() => {
//   console.log("全局的BeforeAll");
// });

// afterAll(() => {
//   console.log("全局的AafterAll");
// });

// beforeEach(() => {
//   console.log("全局的BeforeEach");
// });

// afterEach(() => {
//   console.log("全局的AfterEach");
// });

// test("测试加法", () => {
//   expect(sum(1, 2)).toBe(3);
//   console.log("\x1b[31m%s\x1b[0m", "测试加法");
// });

// test("测试减法", () => {
//   expect(sub(5, 3)).toBe(2);
//   console.log("\x1b[31m%s\x1b[0m", "测试减法");
// });

// /**
//  * it函数就是test函数的别名
//  */
// it("测试乘法", () => {
//   expect(mul(2, 6)).toBe(12);
//   console.log("\x1b[31m%s\x1b[0m", "测试乘法");
// });

// it("测试除法", () => {
//   expect(div(100, 2)).toBe(50);
//   console.log("\x1b[31m%s\x1b[0m", "测试除法");
// });

// beforeAll(() => {
//   console.log("\x1b[31m%s\x1b[0m", "全局的BeforeAll");
// });

// afterAll(() => {
//   console.log("\x1b[31m%s\x1b[0m", "全局的AafterAll");
// });

// beforeEach(() => {
//   console.log("\x1b[31m%s\x1b[0m", "全局的BeforeEach");
// });

// afterEach(() => {
//   console.log("\x1b[31m%s\x1b[0m", "全局的AfterEach");
// });

// describe("第一组", () => {
//   beforeEach(() => {
//     console.log("\x1b[31m%s\x1b[0m", "分组的BeforeEach");
//   });

//   afterEach(() => {
//     console.log("\x1b[31m%s\x1b[0m", "分组的AfterEach");
//   });

//   test("测试加法", () => {
//     expect(sum(1, 2)).toBe(3);
//     console.log("\x1b[31m%s\x1b[0m", "测试加法");
//   });

//   test("测试减法", () => {
//     expect(sub(5, 3)).toBe(2);
//     console.log("\x1b[31m%s\x1b[0m", "测试减法");
//   });
// });

// describe("第二组", () => {
//   beforeEach(() => {
//     console.log("\x1b[31m%s\x1b[0m", "分组的BeforeEach");
//   });

//   afterEach(() => {
//     console.log("\x1b[31m%s\x1b[0m", "分组的AfterEach");
//   });

//   test.only("测试乘法", () => {
//     expect(mul(2, 6)).toBe(12);
//     console.log("\x1b[31m%s\x1b[0m", "测试乘法");
//   });

//   it("测试除法", () => {
//     expect(div(100, 2)).toBe(50);
//     console.log("\x1b[31m%s\x1b[0m", "测试除法");
//   });
// });

describe("测试只有某一个测试用例执行", () => {
  test("测试乘法", () => {
    expect(mul(2, 6)).toBe(12);
    console.log("\x1b[31m%s\x1b[0m", "测试乘法");
  });

  it.only("测试除法", () => {
    expect(div(100, 2)).toBe(50);
    console.log("\x1b[31m%s\x1b[0m", "测试除法");
  });
});
