import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Greeting from "./components/greeting";

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);

root.render(
  <React.Fragment>
    <App/>
    <Greeting/>
  </React.Fragment>
);
