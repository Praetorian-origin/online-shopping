import React, { useEffect, useState } from "react";
import { Link, Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Article from "./Components/Article";
import Articles from "./Components/Articles";
import Login from "./Components/Login";
import Users from "./Components/Users";
import Home from "./Components/Home";
import articleService from "./Services/articles";
import NotFoundView from "./Components/NotFoundView";
import Notification from "./Components/Notification";
import AddArticle from "./Components/AddArticle";
import EditArticle from "./Components/EditArticle";

const App = () => {
  //user state stays there because it's central
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const articlesData = await articleService.getAll();
      setArticles(articlesData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const setNotificationMessage = (message, isError) => {
    setMessage(message);
    setIsError(isError);
    setTimeout(() => setMessage(""), 5000);
  };

  const handleEditArticle = (articleToUpdate) => {
    setArticles(
      articles.map((article) =>
        article.id === articleToUpdate.id ? articleToUpdate : article
      )
    );
  };

  const removeArticle = (articleToRemove) => {
    try {
      articleService.remove(articleToRemove.id);
      setArticles(
        articles.filter((article) => article.id !== articleToRemove.id)
      );
    } catch (exception) {
      setNotificationMessage(exception, true);
    }
  };

  let article;
  const matchGetByArticleID = useRouteMatch("/articles/:id");
  article = matchGetByArticleID
    ? articles.find((article) => article.id === matchGetByArticleID.params.id)
    : null;

  const matchEditByArticleID = useRouteMatch("/articles/edit/:id");
  article = matchEditByArticleID
    ? articles.find((article) => article.id === matchEditByArticleID.params.id)
    : null;

  const login = (user) => {
    setUser(user);
  };

  if (isLoading === false) {
    return (
      <div>
        <Notification message={message} isError={isError} />
        <div>
          <Link to="/">home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/users">Users</Link>
          <Link to="/login">login</Link>
          <Link to="/articles/new">New Article</Link>
        </div>

        <Switch>
          <Route path="/articles/new" exact={true}>
            <AddArticle setNotificationMessage={setNotificationMessage} />
          </Route>
          <Route path="/articles" exact={true}>
            <Articles articles={articles} removeArticle={removeArticle} />
          </Route>
          <Route path="/articles/edit/:id" exact={true}>
            <EditArticle
              article={article}
              setNotificationMessage={setNotificationMessage}
              handleEditArticle={handleEditArticle}
            />
          </Route>
          <Route path="/articles/:id" exact={true}>
            <Article article={article} />
          </Route>

          <Route path="/users" exact={true}>
            {user ? <Users /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login" exact={true}>
            <Login onLogin={login} />
          </Route>

          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default App;
