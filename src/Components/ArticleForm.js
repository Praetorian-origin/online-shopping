import React from "react";



// l'idée cest de créer un formulaire qui reçoit les states et la méthode submit pour déterminer
// s'il s'agit d'une update ou d'une insertion
const ArticleForm = ({name, stock, descr, setName, setStock, setDescr, submitMethod,
buttonText}) => {



  const handleNameChange = (e) => setName(e.target.value);
  const handleStockChange = (e) => setStock(e.target.value);
  const handleDescrChange = (e) => setDescr(e.target.value);

  return (
    <form onSubmit={submitMethod}>
      <label>Name</label>
      <input
        value={name}
        onChange={(e) => handleNameChange(e)}
        required={true}
      />
      <label>Stock</label>
      <input
        value={stock}
        type="number"
        onChange={(e) => handleStockChange(e)}
        required={true}
      />
      <label>Description</label>
      <input
        value={descr}
        onChange={(e) => handleDescrChange(e)}
        required={true}
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default ArticleForm;
