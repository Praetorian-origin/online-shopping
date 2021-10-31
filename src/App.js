import React, { useEffect, useState } from "react";
import { Link, Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Article from "./Components/Article";
import Articles from "./Components/Articles";
import Login from "./Components/Login";
import Users from "./Components/Users";
import Home from "./Components/Home";

const App = () => {


const articlesData = [
  {id: 1, name: 'Book1', descr: 'lorem ipsum1', stock: 99},
  {id: 2, name: 'Book2', descr: 'lorem ipsum2', stock: 2},
  {id: 3, name: 'Book3', descr: 'lorem ipsum3', stock : 55},
]


  const [articles, setArticles] = useState([])

  
 
  const [user, setUser] = useState(null)


  useEffect(() => {
    setArticles(articlesData)
  }, []);



  const match = useRouteMatch('/articles/:id')
  const article = match 
    ? articles.find(article => article.id === Number(match.params.id))
    : null


  const login = (user) => {
    setUser(user)
  }
  return (
    <div>
      <div>
        <Link to="/">home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/users">Users</Link>
        <Link to="/login">login</Link>
      </div>

      <Switch>
        <Route path="/notes/:id">
          <Article article={article} />
        </Route>
        <Route path="/articles">
          <Articles articles={articles} />
        </Route>
        <Route path="/users">
          {user ? <Users /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login onLogin={login} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
};

export default App;
