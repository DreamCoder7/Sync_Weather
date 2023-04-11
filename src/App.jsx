import { Fragment } from "react";
import { GlobalStyle } from "./style/index";
import { Sidebar, Dashboard } from "./component/index";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Sidebar />
      <Dashboard />
    </Fragment>
  );
}

export default App;
