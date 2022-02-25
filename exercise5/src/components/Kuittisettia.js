import React from 'react'

//{props.map(kuitti =><div>{kuitti.id}</div>)}

//{console.log(props)}
export default function Kuittisettia(props) {
 console.log(props)
  return (
    <div > 
    <div className="Kuitti"> <h1>Ostajan nimi</h1><h1>Ostettu tuottet</h1><h1>hinta €</h1>     </div>
    <div className="Kuitti2"> 
    <h2>{props.kuitit2.map(k =><div>{k.ostaja}</div>)}</h2>
    <h2>{props.kuitit2.map(k =><div>{k.tuote}</div>)}</h2>
    <h2>{props.kuitit2.map(k =><div>{k.hinta}</div>)}</h2>
    
    
       
    </div>
    
    
    
  </div>
  )
}
