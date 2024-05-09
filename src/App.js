import * as React from "react";
import "@silevis/reactgrid/styles.css";
import "./App.css";
import GridHeader from "./GridHeader";
import GridSheet from "./GridSheet";


function App() {
    const numTimes = 30;
    const elements = [];
    for (let i = 0; i < numTimes; i++) {
      elements.push(<GridSheet />);
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>David's Prospect Rankings</h1>
      </header>
      <GridHeader />
      {elements}
      
    </div>
  );
}

export default App;
