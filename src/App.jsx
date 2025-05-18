import NavBar from "./components/navigationBar/NavBar.JSX";

const App = () => {
  return(
    <div>
      <NavBar />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mt-10">Welcome to MyStore</h1>
        <p className="text-center mt-4">Your one-stop shop for all your needs!</p>
        <p className="text-center mt-4">Explore our wide range of products and enjoy shopping!</p>
      </div>
    </div>
  )
};
export default App;