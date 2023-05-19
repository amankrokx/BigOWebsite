import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Events } from "./components/Events";
import { Contact } from "./components/Contact";
import { Members } from "./components/Members";

function App() {
  return (
    <div className="App">
      <Events />
      <Members />
      <Contact />
    </div>
  );
}

export default App;
