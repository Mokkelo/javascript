import React from 'react';
import Kyna from './Kyna.png'; 

export default function ProductItem(props) {
 // const [kuitti, setKuitti] = useState("");
    
 //   const handleNameChange = (event) => {
 ////       setKuitti(event.target.value);
  //  }

  return (
  <div className="productItem">
        <div>{props.name}</div>
        
        <img src={props.image} />
        <div>{props.price} €</div>
        <button onClick={ () => props.setKuittiMode(props.name, props.price)}> osta tämä</button>
        
  </div>);
}
