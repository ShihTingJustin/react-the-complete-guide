import React from "react";

const MyParagraph = ({ children }) => {
  console.log("MyParagraph RUNNING");
  return <p>{children}</p>;
};

export default MyParagraph;
