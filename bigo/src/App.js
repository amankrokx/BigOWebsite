import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Events } from "./components/Events";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Events />
      <Contact />
    </div>
  );
}

export default App;
