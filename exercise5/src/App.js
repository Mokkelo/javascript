import './App.css';
import Kyna from './components/Kyna.png';
import hdd from './components/hdd.jpg'
import johto from './components/johto.jpg'
import muste from './components/muste.jpg'
import nappis from './components/nappis.jpg'
import naytto from './components/naytto.jpg'
import roku from './components/roku.jpg'

import Search from './components/search'
import Admin from './components/Admin'
import CreateUser from './components/CreateUser'
import ListAdditionInputs from './components/ListAdditionInputs'
import Kuitti from './components/Kuitti'
import axios from 'axios';


import ProductItem from './components/ProductItem'
import ProductListView from './components/ProductListView'
import { useEffect, useState } from 'react';




function App() {
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
//const [kayttajankuitit] = useState([]);


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


useEffect(() => {                                                   // tällä haetaan kaikki käyttäjän kuitit
  const haeKuitit = async (name) => {
  const results = await axios.get("http://localhost:3000/kuitti/"+name+"")
  //console.log(results);
  setKayttajankuitit(results.data)
}
haeKuitit();

}, []);



const haeKuitit2 = async (kakka) => { //
  //console.log(axios.get("http://localhost:3000/kuitti/Matti"))
  const kayttajankuitit2 = await axios.get("http://localhost:3000/kuitti/"+kakka.name+"")
  //console.log(kakka.name)
  //console.log(kayttajankuitit2)
  setKayttajankuitit2(kayttajankuitit2.data)
  return kayttajankuitit2.data;
  }

const filterProducts = (products2, query) => {                      //filterproducts hakukenttää varten
  if (!query) {
    
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



  /*let newUsers = [...users, { //tämä koodi lisää käyttäjän hardkoodattuun listaan
    id: users.length + 1, 
    name: name,
    saldo : saldo
   }];
   setUsers(newUsers); 
*/
}

const onListAddition = async (name, price) => {         //lisää tuotteen listaan
    
 await axios.post('http://localhost:3000/products/', {
   "name": name,
   "price": price,
 })
 window.location.reload(false);

  /*let newProducts = [...products, { 
    id: products.length + 1, 
    name: name,
    image: null,
    price : price
    }];
    console.log("Tässä");
   setProducts(newProducts); */
}

const getProductIdNumber = async (name) => {        //hae nimellä idnumero
let id = await axios.get("http://localhost:3000/products/"+name+"")
  console.log(id.data)
 return id.data;
}

const onProductModify = async (name, price, oldname) => {     //muokkaa tuotetta
  let productsId =  await getProductIdNumber(oldname);
 console.log("productsid onproductmodify")
 console.log(productsId)

  await axios.put("http://localhost:3000/products/"+productsId+"", {

   "name": name,
   "price": price,
})
window.location.reload(false);
};

const filteredProducts = filterProducts(products2, query);

const ostanyt = (name, price)=> {
  let newKuitti = [...kuitti, { 
id:kuitti.length + 1, 
name: name,
price: price,  
  }];
  setKuitti(newKuitti);
setKuittiMode(!kuittiMode);

}

const onItemDelete = async (productdata) => {         // poistaa onnnistuneesti tuotteen, päivitys admin sivulle puuttuu
console.log(productdata);
  await axios.delete("http://localhost:3000/products/"+productdata.id+"")
  window.location.reload(false);
 /* 
let newProducts = [...products2];
let deletedItemIndex = newProducts.findIndex(p=> p.id === item.id);
newProducts.splice(deletedItemIndex, 1);
setProducts(newProducts);*/
}




let createUser = <CreateUser/>                                                        //nää liittyy outputtiin
let output = <ProductListView products2={filteredProducts} setKuittiMode={ostanyt} />
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








//if(adminMode == false){
//  output
//}

//{filteredProducts.map(product =><ProductItem name={product.name} image = {product.image} price={product.price} />)}
//<Search/>
//    <div className="productContainer"> 
//    
//    {filteredProducts.map(product =><ProductItem name={product.name} image = {product.image} price={product.price} />)}
//  </div>
// https://www.emgoto.com/react-search-bar/ lisää ohjieta jatkoon