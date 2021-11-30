import "./App.css"
import Home from "./PortfolioContainer/Home/Home";
import Resume from "./PortfolioContainer/AboutMe/Resume";
import ProductList from "./PortfolioContainer/ProductList/ProductList";
import Contact from "./PortfolioContainer/ContactMe/Contact";

function App() {
  return (
    <div className="App">
      <Home/>
      <Resume/>
      <ProductList/>
      <Contact/>
    </div>
    
  );
}


export default App;
