import {
  Header,
  Footer,
  About,
  Skills,
  Testimonial,
  Work,
  Languages,
} from "./Container";
import { Navbar, Divider } from "./Components/index.js";
import "./index.css";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Languages />
      <Work />
      {/* <Divider co lor1="#313155" color2="red" /> */}
      <About />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
