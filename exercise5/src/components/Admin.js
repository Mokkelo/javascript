import React, {useState} from 'react'

export default function Admin(props) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }

  const handle = (event) => {
    event.preventDefault();
    props.onListAddition(name, price)
  }
 
  const callProductModify = (p) => {    
    props.onProductModify(name, price, p.name)
  }
  
  return (
    <div><h1>Admin mode</h1>

    <form>
        <div>Nimi <input type="text" value={name} onChange={handleNameChange}/></div>
        <div>Hinta <input type="number" value={price} onChange={handlePriceChange}/></div>
        <button onClick={ handle }>Luo uusi tuote </button>

    </form>
    {props.products2.map(p =><div>{p.name} <button onClick={() => props.onItemDelete(p)}>DELETE</button>
    
    
    <>
         
        <button onClick={() => callProductModify(p)}>Tallenna tähän tuotteeseen uudet arvot ylhäältä </button>
    </>
    
    
    
    
    </div>)}
    
    </div>
  )
}
