import { Fragment, useContext } from "react";

import { GlobalStyle } from "./style/index";
import { Sidebar, Dashboard } from "./component/index";
import { ThemeContext } from "./Context/theme";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <GlobalStyle theme={theme} />
      <Sidebar theme={theme} />
      <Dashboard />
    </Fragment>
  );
}

export default App;
