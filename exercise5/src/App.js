import './App.css';
import Search from './components/search'
import Admin from './components/Admin'
import CreateUser from './components/CreateUser'
import Kuitti from './components/Kuitti'
import axios from 'axios';
import ProductListView from './components/ProductListView'
import { useEffect, useState } from 'react';


function App() {                                          //constit täällä
const [adminMode, setAdminMode] = useState(false);
const [userMode, setUserMode] = useState(false);
const [kuittiMode, setKuittiMode] = useState(false);
const [ products] = useState([]);
const [ users, setUsers] = useState([])
const [kuitti, setKuitti] = useState([])
const [kayttajankuitit, setKayttajankuitit]  = useState([])
const [kayttajankuitit2, setKayttajankuitit2]  = useState([])
const [products2, setProducts] = useState([...products])
const { search } = window.location;
const query = new URLSearchParams(search).get('s');



useEffect(() => {                                                 //tälä haetaan kaikki tuotteet 
  const getData = async () => {
  const results = await axios.get('http://localhost:3000/products')
  //console.log(results);
  setProducts(results.data)
}
getData();

}, []);

useEffect(() => {                                                   // tällä haetaan kaikki käyttäjät
  const getDataUsers = async () => {
  const results = await axios.get('http://localhost:3000/users')
  //console.log(results);
  setUsers(results.data)
}
getDataUsers();

}, []);


const haeKuitit2 = async (kakka) => {                                     //Tällä haetaan käyttäjän kuitit  
  const kayttajankuitit2 = await axios.get("http://localhost:3000/kuitti/a/"+kakka.name+"")
  setKayttajankuitit2(kayttajankuitit2.data)
  return kayttajankuitit2.data;
  }

const filterProducts = (products2, query) => {                      //filterproducts hakukenttää varten
  if (!query) {                                                     //tulostaa filterproductsin mutta jos haku tyhjä, sisältää kaikki tuotteet
      return products2;
  }
  return products2.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.includes(query);
  });
};

const onListAddition2 = async (name, lname, address) => {       // tämä toiminto lisää käyttäjän listaan
    
  await axios.post('http://localhost:3000/users/', {
    "name": name,
    "lname": lname,
    "osoite": address
  })
  window.location.reload(false);
}

const onListAddition = async (name, price) => {         //lisää tuotteen listaan
    
 await axios.post('http://localhost:3000/products/', {
   "name": name,
   "price": price,
 })
 window.location.reload(false);
}

const getProductIdNumber = async (name) => {        //hae nimellä idnumero
let id = await axios.get("http://localhost:3000/products/"+name+"")
 return id.data;
}

const onProductModify = async (name, price, oldname) => {     //muokkaa tuotetta
  let productsId =  await getProductIdNumber(oldname);
  await axios.put("http://localhost:3000/products/"+productsId+"", {

   "name": name,
   "price": price,
})
window.location.reload(false);
};

const filteredProducts = filterProducts(products2, query);      //tämän pitää olla tässä jostainsyystä, ei jaksanu debuggailla

const ostanyt = async (name, price)=> {           //ostanyt nappia painettaessa tuote siirtyy ostoskoriin
  
  await axios.post("http://localhost:3000/ostoskori", {
    "ostaja": "Matti",
    "tuote": name,
    "hinta" : price
  })
  let newKuitti = await axios.get("http://localhost:3000/ostoskori")
  setKuitti(newKuitti);
setKuittiMode(!kuittiMode);
}

const onItemDelete = async (productdata) => {         // poistaa onnnistuneesti tuotteen, päivitys admin sivulle puuttuu
  await axios.delete("http://localhost:3000/products/"+productdata.id+"")
  window.location.reload(false);
}
                                                                    
let output = <ProductListView products2={filteredProducts} setKuittiMode={ostanyt} /> //nää liittyy outputtiin
let hakukentta = <Search/>;
if( adminMode == true ) {                                     //Tässä viedään paljon kamaa admin sivulle
  output = <Admin products2={filteredProducts} 
  onItemDelete={onItemDelete} 
  onListAddition={onListAddition} 
  products={products} 
  setProducts={setProducts}
  onProductModify={onProductModify}
   />;
  hakukentta = "";
}

if (userMode == true) {                                       //tässä viedään user sivulle kamaa eli create user
  output = <CreateUser users= {users} 
  onListAddition2= {onListAddition2}
  haeKuitit2= {haeKuitit2}
  kayttajankuitit2={kayttajankuitit2} 
  kayttajankuitit= {kayttajankuitit}
   />;
  hakukentta = "";}
if (kuittiMode == true){                                        //tähän kuitin toteutus, vaiheessa vielä
  output = <Kuitti kuitti={kuitti}/>;
}

  return (
  <div> 
     <button onClick={() => setAdminMode(!adminMode) }>Admin Mode</button>
     <button onClick={() => setUserMode(!userMode) }>Create User</button>
     <button onClick={() => setKuittiMode(!kuittiMode) }>Kuittimode</button>
    {hakukentta} 
    {output}
  </div>
  );
}

export default App;
