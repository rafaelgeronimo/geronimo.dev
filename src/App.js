import "./App.css";

import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Navigation />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
