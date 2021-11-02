import articleService from "../Services/articles";


const articleReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_ARTICLE":
      return [...state, action.data];
    case "DELETE_ARTICLE":
      return (state = state.filter((article) => action.data.id !== article.id));
    case "UPDATE_ARTICLE":
      return state.map((article) =>
        action.data.id === article.id ? action.data : article
      );
    case "INIT_ARTICLES":
      return action.data;
    default:
      return state;
  }
};


export const createArticle = (data) => {
  return async (dispatch) => {
    const newArticle = await articleService.create(data);
    dispatch({
      type: "NEW_ARTICLE",
      data: newArticle,
    });
  };
};

export const deleteArticle = (id) => {
  return async (dispatch) => {
    await articleService.remove(id);
    dispatch({
      type: "DELETE_ARTICLE",
      data: { id },
    });
  };
};

export const updateArticle = (data) => {
  return async (dispatch) => {
    await articleService.update(data);
    dispatch({
      type: "UPDATE_ARTICLE",
      data,
    });
  };
};

export const initializeArticles = () => {
  return async (dispatch) => {
    const articles = await articleService.getAll();
    dispatch({
      type: "INIT_ARTICLES",
      data: articles,
    });
  };
};

export default articleReducer;
