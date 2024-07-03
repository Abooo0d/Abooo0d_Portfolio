import { Header, Footer, About, Skills, Testimonial, Work } from "./Container";
import { Navbar } from "./Components";
import "./index.css";
const App = () => {
  return (
    <div className="app">
       <Navbar /> 
      <Header />
      <About />
      <Skills />
      <Testimonial />
      <Footer />
      <Work />
    </div>
  );
};

export default App;
