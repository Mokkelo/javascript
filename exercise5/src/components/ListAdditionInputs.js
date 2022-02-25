import React, {useState} from 'react';

export default function ListAdditionInputs(props) {

    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");

    const handleSaldoChange = (event) => {
        setLname(event.target.value);
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }


  return ( <div>
          
          <div>nimi <input type="text"  value={ name } onChange={ handleNameChange }/></div>  
          <div>sukunimi <input type="text" value={ lname } onChange={ handleSaldoChange } /></div> 
          <div> osoite <input type="text"  value={ address } onChange={ handleAddressChange }/></div>   
          <button onClick={ () => props.onListAddition2(lname, name, address) }>Lisää</button> 
  </div>
  )
}