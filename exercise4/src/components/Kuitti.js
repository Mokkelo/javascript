import React from 'react'


export default function Kuitti(props) {
//console.log(props.kuitti[0]);
let nimi = props.kuitti[props.kuitti.length - 1].name;
let hinta = props.kuitti[props.kuitti.length -1].price;
//const kaikki ()=> {


//}


  return (
<div>
    <div>Kuitti:

  <div>Ostit tuotteen {nimi} </div>
   Hintaan<div></div>   
    {hinta}€
  

</div>
<button >Listaa kaikki kuitit</button>
</div>
  )
}
