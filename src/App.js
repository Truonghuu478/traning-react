// import "./App.css";
import React from 'react'
import DemoProps from './components/Props/DemoProps/DemoProps';
// import DemoChangeFSize from './components/DemoState/DemoChangeFSize';


// import FunctionComponent from "./components/DemoComponent/FunctionComponent";
// import ClassComponent from "./components/DemoComponent/ClassComponent";
// import DataBinding from "./components/DataBinding/DataBinding";
// import HandleEvent from "./components/HandleEvent/HandleEvent";
// import Layout from "./components/BaiTapLayout2/Layout";
// import DemoState from "./components/DemoState/DemoState"
// import DemoStyle from './components/DemoStyle/DemoStyle';
import ExPhone from "./components/Props/Ex_Phones/Ex_Phones"

function App() {
  return (
    <div className="App container">
      {/* <DemoProps/> */}
      <ExPhone/>
    </div>
  );
}

export default App;
