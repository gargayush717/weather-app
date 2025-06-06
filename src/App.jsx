import Search from "./Components/Search";
import Weather from "./Components/Weather";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="container py-4">
        <h1 className="text-center mb-4">Weather App</h1>
        <Search />
        <Weather />
      </div>
    </>
  );
}

export default App;
