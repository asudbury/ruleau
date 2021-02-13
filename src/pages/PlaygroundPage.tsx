import React, { ReactElement } from "react";

import SearchFor from "../components/SearchFor";
import Login from "../components/Login";
import Protect from "../components/Protect";

function App(): ReactElement {
  function onChange(text: string) {
    alert(text);
  }
  return (
    <div>
      <br />
      <Protect />
      <SearchFor label="Search" onChange={onChange} datatestid="dara1" />
      <Login initialState={0} />
    </div>
  );
}

export default App;
