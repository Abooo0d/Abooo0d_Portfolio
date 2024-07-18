import {
  Header,
  Footer,
  About,
  Skills,
  Testimonial,
  Work,
  Languages,
} from "./Container";
import { Navbar } from "./Components/index.js";
import "./index.css";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Languages />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
