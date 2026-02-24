import React from "react";
import pages from "./data/pages";
import FavoriteRecipeList from "./components/FavoriteRecipeList";
import MyMemes from "./components/MyMemes";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import App from "./components/App";
import Header from "./components/Header";

function Routes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route exact path="/">
          <Header title="Home" />
          <App />
        </Route>
        <Route path="/favorite-recipes">
          <Header title="Favorite Recipes" />
          <FavoriteRecipeList />
        </Route>
        <Route path="/my-memes">
          <Header title="My Memes" />
          <MyMemes />
        </Route>
        {pages.map((page, index) => {
          return (
            <Route index={index} path={page.path}>
              <Header title={page.name} />
              {page.component}
            </Route>
          );
        })}
      </Switch>
    </AnimatePresence>
  );
}

export default Routes;
