import React from "react";
import Article from "./Article";

const Articles = ({ articles, removeArticle }) => {


  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <Article
           article={article}
          />
          <button onClick={() => removeArticle(article)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Articles;
