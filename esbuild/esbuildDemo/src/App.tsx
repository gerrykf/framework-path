import React from "react";
import * as ReactDOM from "react-dom";
import img from "@/assets/0.jpg";

let HelloWorldComponent = () => (
  <div>
    <h1>hello world</h1>
    <img src={img} />
  </div>
);

console.log(HelloWorldComponent);
