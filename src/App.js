import React, { useEffect, useState } from "react";
import { Link, Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Article from "./Components/Article";
import Articles from "./Components/Articles";
import Login from "./Components/Login";
import Users from "./Components/Users";
import Home from "./Components/Home";
import articleService from "./Services/articles";
import NotFoundView from "./Components/NotFoundView";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const articlesData = await articleService.getAll();
      setArticles(articlesData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const match = useRouteMatch("/articles/:id");
  const article = match
    ? articles.find((article) => article.id === Number(match.params.id))
    : null;

  const login = (user) => {
    setUser(user);
  };

  if (isLoading === false) {
    return (
      <div>
        <div>
          <Link to="/">home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/users">Users</Link>
          <Link to="/login">login</Link>
        </div>

        <Switch>
          <Route path="/articles/:id" exact={true}>
            {article ? <Article article={article} /> : ""}
            {/* <Article article={article} /> */}
          </Route>
          <Route path="/articles" exact={true}>
            <Articles articles={articles} />
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
            <NotFoundView/>
          </Route>
 
        </Switch>
      </div>
    );
  }
  else {
    return <div>Loading...</div>
  }
};

export default App;
