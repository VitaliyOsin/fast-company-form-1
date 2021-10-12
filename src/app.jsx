import React from "react";
import { Route, Switch } from "react-router";
import NavBar from "./components/navBar";
import Login from "./layouts/ligin";
import Main from "./layouts/main";
import Users from "./layouts/users";
import User from "./components/user";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users/:userId" component={User} />
        <Route path="/users" component={Users} />
      </Switch>
    </>
  );
};

export default App;
