import React, { useState } from "react";
import ArticleForm from "./ArticleForm";
import { useDispatch } from "react-redux";
import { createArticle } from "../Reducers/articleReducer";
import { setErrorMessage, setSuccessMessage } from "../Reducers/notificationReducer";

const AddArticle = () => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [descr, setDescr] = useState("");
  const dispatch = useDispatch();

  const stateCleanUp = () => {
    setName("");
    setStock("");
    setDescr("");
  };

  const addArticle = async (e) => {
    e.preventDefault();
    try {
      dispatch(createArticle({ name, stock, descr }));
      stateCleanUp();
      dispatch(setSuccessMessage('Article created'));
    } catch(exception) {
      setErrorMessage('Error ' + exception);
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
        submitMethod={addArticle}
        buttonText="Add Article"
      />
    </div>
  );
};

export default AddArticle;
