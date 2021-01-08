import React from "react";
import LazyCardList from "./components/lazyCardList"

import data from "./data/nice_servant.json"

function App() {

  return (
    <div className="App">
        <LazyCardList data={data}/>
    </div>
  );
}

export default App;
