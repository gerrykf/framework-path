import * as esbuild from "esbuild";
const code = `
interface User {
    name: string;
    age: number;
};
let x:number = 1;
const getUser = (user: User) => {
    console.log(user);
};
getUser({name: "zhangsan", age: 18});
`;

// 使用esbuild.transformSync()方法进行转换
let result = esbuild.transformSync(code, {
  loader: "ts",
  minify: true,
});

console.log(result);
