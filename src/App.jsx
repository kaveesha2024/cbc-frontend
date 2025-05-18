
import Hero from "./components/hero/Hero";
import HomeProductContainer from "./components/homeProductContainer/HomeProductContainer";
import NavBar from "./components/navigationBar/NavBar.JSX";

const App = () => {
  return(
    <div>
      <NavBar />
      <Hero />
      <HomeProductContainer />
    </div>
  )
};
export default App;