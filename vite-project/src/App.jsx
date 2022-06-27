import "./App.css";

import Header from "./sections/header";
import Gallery from "./sections/gallery";
import Intro from "./sections/intro";

function App() {
  return (
    <div className="container">
      <Header className="canvas" />
      <Intro className="canvas" />
      <Gallery className="canvas" />
    </div>
  );
}

export default App;
