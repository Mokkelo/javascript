import React from 'react'

export default function Kuittisettia(props) {
  return (
    <div className="productContainer"> 
    {console.log(props.kayttajankuitit)}
    {props.kayttajankuitit.map(kuitti =><div>{kuitti.id}</div>)}
    
  </div>
  )
}
