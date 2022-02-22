import React, {useState} from 'react'

export default function Admin(props) {

  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div><h1>Admin mode</h1>

    <form>
        <div>Nimi <input type="text" value={name} onChange={handleNameChange}/></div>
        <div>Hinta <input type="number" value={price} onChange={handlePriceChange}/></div>
        <button onClick={ ()=> props.onListAddition(name, price) }>Tallenna </button>

    </form>
    {props.products2.map(p =><div>{p.name} <button onClick={() => props.onItemDelete(p)}>DELETE</button></div>)}
    
    </div>
  )
}
