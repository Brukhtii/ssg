import React from "react";
import { ComponentsBlock } from './components/ComponentsBlock';

function App() {
  return (
    <div className="app">
      <h1>Web page to test SSG in SEO</h1>
      <ComponentsBlock componentsQty={250} />
    </div>
  );
}
export default App;