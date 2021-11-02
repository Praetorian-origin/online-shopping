import React, { useEffect, useState } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Articles from "./Components/Articles";
import Login from "./Components/Login";
import Users from "./Components/Users";
import Home from "./Components/Home";
import NotFoundView from "./Components/NotFoundView";
import Notification from "./Components/Notification";
import AddArticle from "./Components/AddArticle";
import EditArticle from "./Components/EditArticle";
import { useSelector, useDispatch } from "react-redux";
import { initializeArticles } from "./Reducers/articleReducer";
import { setIsDone } from "./Reducers/loadReducer";

const App = () => {
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(initializeArticles());
    dispatch(setIsDone());
  }, [dispatch]);

  const login = (user) => {
    setUser(user);
  };

  if (isLoading === false) {
    return (
      <div>
        <Notification />
        <div>
          <Link to="/">home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/users">Users</Link>
          <Link to="/login">login</Link>
          <Link to="/articles/new">New Article</Link>
        </div>

        <Switch>
          <Route path="/articles/new" exact={true}>
            <AddArticle />
          </Route>
          <Route path="/articles" exact={true}>
            <Articles />
          </Route>
          <Route path="/articles/edit/:id" exact={true}>
            <EditArticle />
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
