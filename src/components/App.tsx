import * as React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";

import { Layout } from "antd";
const { Header } = Layout;

const App = () => {
  return (
    <Layout>
      <Header style={{ color: "white", fontSize: "2rem" }}>
        <Link to="/">Hackernews</Link>
      </Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </Layout>
  );
};

export default App;
