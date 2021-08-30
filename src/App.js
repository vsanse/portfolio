import { useEffect } from "react";
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
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
