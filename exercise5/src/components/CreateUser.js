import React from 'react'
import ListAdditionInputs from './ListAdditionInputs'
import UserList from './UserList'
import axios from 'axios'
import Kuittisettia from './Kuittisettia'
import {useState} from 'react'


export default function CreateUser(props) {

  const [kuitit2, setKuitit2] = useState([])
  const [kuittimode2, setKuittimode2] = useState(false)

const apufunktio = async (p) => {
  let kuitit1 = await props.haeKuitit2(p)
  setKuitit2(kuitit1)
  setKuittimode2(!kuittimode2)
}


 let output2 =  <div>
 <div>Add user</div>
<ListAdditionInputs onListAddition2 ={ props.onListAddition2 }/> 
<div>Userlist</div>
{props.users.map(p =><div>{p.name} <button onClick={ ()=> apufunktio(p) }>hae kuitit</button></div>)}
</div>


if(kuittimode2==true){
  console.log(kuitit2)
  output2 = <div> <Kuittisettia kuitit2={kuitit2}/> </div>
}
  return (
    <div>
    {output2}
    </div>
  )}
