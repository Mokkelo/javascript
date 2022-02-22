import React, {useState} from 'react';

export default function ListAdditionInputs(props) {

    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState("");

    const handleQuantityChange = (event) => {

        console.log(event.target.value);
        setQuantity(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }


  return <div>
            <div>Kappalemäärä <input type="number" value={ quantity } onChange={ handleQuantityChange } /></div>    
          <div>Kuvaus <input type="text"  value={ description } onChange={ handleDescriptionChange }/></div>  
          <button onClick={ () => props.onAddClick(quantity, description) }>Lisää</button> 
  </div>;
}