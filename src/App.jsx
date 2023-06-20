import Calculator from "./components/Calculator/Calculator";
import Meaning from "./components/Meaning/Meaning";
import Cards from "./components/Cards/Cards";
import Limitations from "./components/Limitations/Limitations";
import Header from "./components/Header/Header";
import './App.scss';


function App() {
  return (
    <div>
      <Header />
      <Calculator />
      <Meaning />
      <Cards />
      <Limitations />
    </div>
  );
}

export default App;
