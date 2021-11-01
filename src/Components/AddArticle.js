import React, { useState } from "react";
import articleService from "../Services/articles";
import ArticleForm from "./ArticleForm";

const AddArticle = ({ setNotificationMessage }) => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [descr, setDescr] = useState("");

  const stateCleanUp = () => {
    setName("");
    setStock("");
    setDescr("");
  };

  const createArticle = async (e) => {
    e.preventDefault();
    try {
      articleService.create({ name, stock, descr });
      stateCleanUp();
      setNotificationMessage("Article created", false);
    } catch (exception) {
      setNotificationMessage(exception, true);
    }
  };

  return (
    <div>
      <h1>Add Article</h1>
      <ArticleForm
        name={name}
        stock={stock}
        descr={descr}
        setName={setName}
        setStock={setStock}
        setDescr={setDescr}
        submitMethod={createArticle}
        buttonText='Add Article'
      />
    </div>
  );
};

export default AddArticle;
