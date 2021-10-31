import React from "react";
import Article from "./Article";

const Articles = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <Article
            name={article.name}
            descr={article.descr}
            stock={article.stock}
          />
        </div>
      ))}
    </div>
  );
};

export default Articles;
