import React from "react";
import { useHistory } from 'react-router-dom';


// make button or click area to get access to more details about article // there load more details 
const Article = ({ article }) => {
  const history = useHistory();
  return (
    <div>
      <div>{article.name}</div>
      <div>{article.descr}</div>
      <div>{article.stock}</div>
      <button onClick={(e) => history.push(`/articles/edit/${article.id}`)}>Edit</button>
    </div>
  );
};

export default Article;
