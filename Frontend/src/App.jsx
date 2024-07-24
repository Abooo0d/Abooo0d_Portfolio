import { Header, Footer, About, Skills, Testimonial, Work } from "./Container";
import { Navbar, Divider } from "./Components/index.js";
import "./index.css";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Work />
      <About />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
