import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import ShoppingListContent from './components/ShoppingListContent'
import Header from './components/Header'
import { useState } from 'react';
import ListAdditionInputs from './components/ListAdditionInputs';
import AddButton from './components/AddButton';


function App() {

  const [ counterValue, setCounterValue ] = useState(0);
  const [ shoppinListItems, setShoppingListItems ] = useState([
    { 
      id: 1,
      name: "Maitoa",
      qty: 4,
      isChecked: false
    },
    { 
      id: 2,
      name: "Leipaa",
      qty: 1,
      isChecked: false
    },
    { 
      id: 3,
      name: "Juustoa",
      qty: 9,
      isChecked: false
    },
  
  ]);

  const handleItemCheckedToggle = (item) => {
    console.log("toggling statys");

    let newShoppingListItems = [...shoppinListItems];
    let itemClickedIndex = newShoppingListItems.findIndex(i => item.id == i.id);
    if(itemClickedIndex != -1){
      let newElement = {...shoppinListItems[itemClickedIndex]}
      newElement.isChecked = !newElement.isChecked;
      newShoppingListItems[itemClickedIndex] = newElement;
      setShoppingListItems(newShoppingListItems);
    }
  }

  const onListAddition = (quantity, description) => {
    
    let newShoppinListItems = [...shoppinListItems, { 
      id: shoppinListItems.length + 1, 
      name: description,
      qty : quantity,
      isChecked : false
     }];
     setShoppingListItems(newShoppinListItems); 
  
  }

  const addMaitoa = (item) => {


    console.log(item);
    let newShoppingListItems = [...shoppinListItems];
    //const Maitoa = (element) => element == item;
    let itemClickedIndex = newShoppingListItems.findIndex(M => M.name === item); ;
    
    console.log(itemClickedIndex);
    if(itemClickedIndex != -1) {
      console.log("tasa2")
      let newElement = {...shoppinListItems[itemClickedIndex]}
      newElement.qty = newElement.qty+1;
      newShoppingListItems[itemClickedIndex] = newElement;
      setShoppingListItems(newShoppingListItems);
    }
    else if (itemClickedIndex == -1) {
      let newShoppinListItems = [...shoppinListItems, { 
  
        id: shoppinListItems.length + 1, 
        name: item,
        qty : 1,
        isChecked : false
        
    
       }];
       setShoppingListItems(newShoppinListItems);
    }
    }  
    
  return (
    
    
    <div className="App">
      <Title/>
      
      <div>Laskuri : { counterValue} </div>
      <button onClick={() => setCounterValue(counterValue + 1) }> Increase Counter</button>
      <ListAdditionInputs onAddClick ={ onListAddition }/> 
      <ShoppingListContent listItems= { shoppinListItems } itemClickedEvent={ handleItemCheckedToggle } />
      
      <button onClick={() => addMaitoa("Maitoa") }> addMaitoa</button>
      <button onClick={() => addMaitoa("Juustoa") }> Juustoa</button>
      <button onClick={() => addMaitoa("Leipaa") }> Leipaa</button>
      <button onClick={() => addMaitoa("Bics") }> Bics</button>
    </div>
  );
}

export default App;
