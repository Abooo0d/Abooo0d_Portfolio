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
      {/* <Languages /> */}
      <Work />
      <About />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
