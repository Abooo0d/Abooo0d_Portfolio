import {
  Header,
  Footer,
  About,
  Skills,
  Testimonial,
  Work,
  Experiences,
} from "./Container";
import { Navbar, Divider } from "./Components/index.js";
import "./index.css";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Experiences />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
