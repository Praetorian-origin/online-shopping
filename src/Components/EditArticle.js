import React, {  useEffect, useState } from "react";
import ArticleForm from "./ArticleForm";
import { useHistory, useRouteMatch} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { updateArticle } from "../Reducers/articleReducer";
import { setErrorMessage, setSuccessMessage } from "../Reducers/notificationReducer";

const EditArticle = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [descr, setDescr] = useState('');

  const idOfArticleToEdit = useRouteMatch("/articles/edit/:id").params.id;
  const articles = useSelector(state => state.articlesStore);
  const article = articles.find((article) => article.id === idOfArticleToEdit);


  useEffect(() => {
    setName(article.name);
    setStock(article.stock);
    setDescr(article.descr);
  }, [article])


  const modifyArticle = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateArticle({id: article.id, name, stock, descr}));
      history.push('/articles'); 
      dispatch(setSuccessMessage('Article created'));
    } catch(exception) {
      dispatch(setErrorMessage(exception))
    }
  
  };

  return (
    <div>
      <h1>Edit Article</h1>
      <ArticleForm
        name={name}
        stock={stock}
        descr={descr}
        setName={setName}
        setStock={setStock}
        setDescr={setDescr}
        submitMethod={modifyArticle}
        buttonText="Edit Article"
      />
    </div>
  );
};

export default EditArticle;
