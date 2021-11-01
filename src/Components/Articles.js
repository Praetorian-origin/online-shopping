import React from "react";
import Article from "./Article";

const Articles = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <Article
           article={article}
          />
        </div>
      ))}
    </div>
  );
};

export default Articles;
