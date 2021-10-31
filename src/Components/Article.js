import React from "react";

const Article = ({ name, descr, stock }) => {

    console.log("i'm called")
    console.log(name)
  return (
    <div>
      <div>{name}</div>
      <div>{descr}</div>
      <div>{stock}</div>
    </div>
  );
};

export default Article;
