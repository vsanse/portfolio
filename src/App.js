import { useEffect } from "react";
import Experience from "./components/Experience/Experience";
import Name from "./components/Name/Name";
import { animate } from "./utils/mousetrail";

function App() {
  useEffect(() => {
    animate();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Name/>
      </header>
      <Experience/>
    </div>
  );
}

export default App;
