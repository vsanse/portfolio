import { useEffect } from "react";
import Experience from "./components/Experience/Experience";
import Name from "./components/Name/Name";
import Skills from "./components/Skills/Skills";
import { animate } from "./utils/mousetrail";

function App() {
  useEffect(() => {
    animate();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Name />
      </header>
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
