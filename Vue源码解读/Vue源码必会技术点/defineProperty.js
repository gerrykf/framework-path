let quantity = 2;
let product = {
  price: 10,
  quantity: quantity,
};

// 总价格
let total = 0;
// 计算总价格的匿名函数
let effect = () => {
  total = product.price * product.quantity;
  console.log(`total is ${total}`);
};

// 第一次打印
effect();

Object.defineProperty(product, "quantity", {
  // 监听product.quantity 触发该行为时，以 quantity 变量的值作为 product.quantity 的属性值
  get: function (val) {
    return quantity;
  },
  // 监听quantity = xx 的setter
  set: function (val) {
    // 注意： 这里不可以是product.quantity = val，否则会重复赋值set行为 造成无限递归
    quantity = val;
    effect();
  },
});

product.quantity = 3; // total is 30

/**
 * Vue2.X 通过Object.defineProperty()实现数据响应式
 *
 * 优点：
 *   1.进行赋值行为时，会触发setter，从而触发effect函数，从而更新total  改变了以前使用回调函数的方式去执行计算函数
 * 缺点：
 *   1. 无法监听到对象属性的新增和删除
 *   2. 无法监听到数组索引和length的变化
 */

/** 缺点1 案例 */
let obj = { prop: "test" };

// 监听obj.prop属性 具有obj.prop = xx 行为时，触发set
obj = Object.defineProperty(obj, "prop", {
  set: function (value) {
    console.log("set-obj.prop", value); // 不会触发
  },
  get: function () {
    console.log("get-obj.prop"); // 不会触发
    return "obj.prop";
  },
});

// obj.prop = "test2"; // --defineProperty中监听了prop属性，所以会触发set --set-obj.prop test2
// console.log(obj.prop); // 取用obj.prop时 会触发getter

obj.newProp = "new"; //新增的属性 这个属性不在defineProperty中监听，所以不会触发set

delete obj.prop; // 不会触发任何函数

/** 缺点2 案例 */
let arr = [];

arr = Object.defineProperty(arr, "0", {
  set: function (value) {
    console.log("set", value); // 不会触发
  },
  get: function () {
    console.log("get"); // 不会触发
    return "get--arr[0]";
  },
});

// arr[0] = "test"; // --defineProperty中监听了0属性，所以会触发set --set test
// console.log(arr[0]); // 取用arr[0]时 会触发getter

arr.length = 5; // 不会触发任何函数
