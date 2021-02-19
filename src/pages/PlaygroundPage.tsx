import React, { ReactElement } from "react";

import Login from "../containers/LoginContainer";
import Protect from "../components/Protect";

function App(): ReactElement {
  return (
    <div>
      <br />
      <Protect />
      <Login initialState={0} />
    </div>
  );
}

export default App;
