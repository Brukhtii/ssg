import React from "react";
import { ComponentsBlock } from './components/ComponentsBlock';
import { CSRComponentsBlock } from "./components/CSRComponentsBlock";

function App() {
  return (
    <div className="app">
      <h1>Web page to test SSG + CSR in SEO</h1>
      <div className="modified-components">
       <CSRComponentsBlock componentsQty={500} />
        <ComponentsBlock componentsQty={500} />
      </div>
    </div>
  );
}
export default App;