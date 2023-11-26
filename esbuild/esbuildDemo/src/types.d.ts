// 以.jpg结尾的文件 把它当做一个模块来使用
declare module ".jpg" {
  const src: string;
  export default src;
}
