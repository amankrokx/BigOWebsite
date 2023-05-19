import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Events } from "./components/Events";
import { Contact } from "./components/Contact";
import { Members } from "./components/Members";
import { Footer } from "./components/Footer";

function App() {
  document.title = "BigO";
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Events />
      <Members />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
