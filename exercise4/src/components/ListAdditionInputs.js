import React, {useState} from 'react';

export default function ListAdditionInputs(props) {

    const [name, setName] = useState("");
    const [saldo, setSaldo] = useState(0);

    const handleSaldoChange = (event) => {

        console.log(event.target.value);
        setSaldo(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }


  return ( <div>
          
          <div>nimi <input type="text"  value={ name } onChange={ handleNameChange }/></div>  
          <div>saldo <input type="number" value={ saldo } onChange={ handleSaldoChange } /></div>    
          <button onClick={ () => props.onListAddition2(saldo, name) }>Lisää</button> 
  </div>
  )
}