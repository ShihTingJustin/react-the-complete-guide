import React from "react";
import MyParagraph from "./MyParagraph"

const DemoOutput = ({ show }) => {
  console.log("DemoOutput RUNNING")
  return <MyParagraph>{show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
