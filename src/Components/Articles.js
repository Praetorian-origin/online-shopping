import React from "react";
import Article from "./Article";
import { useSelector, useDispatch } from "react-redux";
import { deleteArticle } from "../Reducers/articleReducer";
import { setErrorMessage, setSuccessMessage } from "../Reducers/notificationReducer";

const Articles = () => {
  const articles = useSelector((state) => state.articlesStore);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    try {
      dispatch(deleteArticle(id));
      dispatch(setSuccessMessage('Article deleted'));
    } catch (exception) {
      dispatch(setErrorMessage(exception));
    }
  };

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <Article article={article} />
          <button onClick={() => handleDelete(article.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Articles;
