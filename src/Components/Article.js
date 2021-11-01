import React from "react";

const Article = ({ article }) => {

  return (
    <div>
      <div>{article.name}</div>
      <div>{article.descr}</div>
      <div>{article.stock}</div>
    </div>
  );
};

export default Article;
