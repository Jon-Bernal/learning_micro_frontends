import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// mount function to startup the app
const mount = (el, { onNavigate, defaultHistory }) => {
  // uses browser router if in local dev mode
  const history = defaultHistory || createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      console.log("Container just navigated");
      console.log("nextPathname: ", nextPathname);
      console.log("history pathname: ", history.location.pathname);
      if (nextPathname !== history.location.pathname) {
        history.push(nextPathname);
      }
    },
  };
};

// if we are in dev and in isolation mode,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// we are running through container
// and we should export the mount function
export { mount };
