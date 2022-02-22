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


import ProductItem from './components/ProductItem'
import ProductListView from './components/ProductListView'
import { useEffect, useState } from 'react';




function App() {
const [adminMode, setAdminMode] = useState(false);
const [userMode, setUserMode] = useState(false);
const [ products] = useState([

{
  id: 1,
  name:"kyna",
  image: Kyna,
  price: 100,
},
{
  id: 2,
  name:"hdd",
  image: hdd,
  price: 45,
},
{
  id: 3,
  name:"johto",
  image: johto,
  price: 4,
},
{
  id: 4,
  name:"muste",
  image: muste,
  price: 78,
},
{
  id: 5,
  name:"nappis",
  image: nappis,
  price: 177,
},
{
  id: 6,
  name:"naytto",
  image: naytto,
  price: 1552,
},
{
  id: 7,
  name:"roku",
  image: roku,
  price: 155,
},
])

const [products2, setProducts] = useState([...products])
const { search } = window.location;
const query = new URLSearchParams(search).get('s');

const filterProducts = (products2, query) => {
  if (!query) {
      return products2;
  }

  return products2.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.includes(query);
  });
};

const filteredProducts = filterProducts(products2, query);

const onItemDelete = (item) => {
let newProducts = [...products2];
let deletedItemIndex = newProducts.findIndex(p=> p.id === item.id);
newProducts.splice(deletedItemIndex, 1);
setProducts(newProducts);
}

let createUser = <CreateUser/>
let output = <ProductListView products2={filteredProducts} />
let hakukentta = <Search/>;
if( adminMode == true ) {
  output = <Admin products2={filteredProducts} onItemDelete={onItemDelete} onTallennaClick={products.name,products.price}  />;
  hakukentta = "";
}
if (userMode == true) {
  output = <CreateUser/>;
  hakukentta = "";}

const onListAddition = (price, name) => {
    
  let newProducts = [...products2, { 
    id: products2.length + 1, 
    name: name,
    image: null,
    price : price
    }];
   setProducts(newProducts); 

}

  return (
  <div> 
     <button onClick={() => setAdminMode(!adminMode) }>Admin Mode</button>
     <button onClick={() => setUserMode(!userMode) }>Create User</button>
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