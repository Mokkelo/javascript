import { getByDisplayValue } from '@testing-library/react'
import React from 'react'


export default function Kuitti(props) {
console.log(props.kuitti.data)
 
  return (
<div> <h1>OSTOSKORI</h1>
  <div className="Kuittilista">
      <div>Käyttäjä</div>
      <div> Tuote </div>
      <div>Hintaan €</div> 
  </div>        
   
      
  <div className="Kuittilista2">     
    <div>{props.kuitti.data.map(p =><div>{p.ostaja} </div>)}</div>
    <div>{props.kuitti.data.map(p =><div>{p.tuote} </div>)}</div>
    <div>{props.kuitti.data.map(p =><div>{p.hinta} </div>)}</div>
  </div>
</div>


  )
}
