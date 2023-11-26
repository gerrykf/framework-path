import React from "react";
import wusa from "../assets/0.jpg";
import comps from "./comps.module.css";

export default () => {
  return (
    <>
      <h1 className={comps.title}>Comp2</h1>
      <img src={wusa} />
    </>
  );
};
