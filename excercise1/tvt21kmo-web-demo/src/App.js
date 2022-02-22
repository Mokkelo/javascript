import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Alaotsikko from './components/Alaotsikko';
import Laatikko1 from './components/Laatikko1';
import Laatikko2 from './components/Laatikko2';
import VasenIsoLaatikko from './components/VasenIsoLaatikko';
import OikeaIsoLaatikko from './components/OikeaIsoLaatikko';
import MainLaatikko from './components/MainLaatikko';



let LaatikkoOtsikko = [
  'hs Ukrainassa',
  'hs venäkällä'
]



function App() {
  return (
    <div className="App">
      <Title/>   
      <Alaotsikko/>
      <Laatikko1/>
      <Laatikko2/>
      <MainLaatikko/>
      

    </div>


    
  );
}

export default App;
