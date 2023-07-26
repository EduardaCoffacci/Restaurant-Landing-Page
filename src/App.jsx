import Work from "./components/Work";
import "./App.css";
import About from "./components/About";
import  Home  from "./components/Home"
import Testimonial from "./components/Testimonial";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
