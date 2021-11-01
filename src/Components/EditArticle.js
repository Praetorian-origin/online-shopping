import React, {  useState } from "react";
import articleService from "../Services/articles";
import ArticleForm from "./ArticleForm";
import { useHistory} from 'react-router-dom';

const EditArticle = ({ article, setNotificationMessage, handleEditArticle }) => {
  const [name, setName] = useState(article.name);
  const [stock, setStock] = useState(article.stock);
  const [descr, setDescr] = useState(article.descr);

  const history = useHistory();

  const modifyArticle = async (e) => {
    e.preventDefault();
    try {
      const updatedArticle = await articleService.update(article.id, { name, stock, descr });
      handleEditArticle(updatedArticle);
      setNotificationMessage("Article updated", false);
      history.push('/articles/')
    } catch (exception) {
      setNotificationMessage(exception, true);
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
