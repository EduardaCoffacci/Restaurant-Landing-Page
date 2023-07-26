import Work from "./components/work";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";
import Contato from "./components/Contato";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contato />
    </div>
  );
}

export default App;
