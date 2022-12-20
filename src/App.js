import './App.css';
import Countries from './components/CountriesList';
import NavBar from './components/Navbar';

function App() {
  const url = "https://ih-countries-api.herokuapp.com/countries";
  
  return (
    <div className="App">
      <NavBar />
      <Countries url={url}/>
    </div>
  );
}

export default App;
