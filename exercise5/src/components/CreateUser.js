import React from 'react'
import ListAdditionInputs from './ListAdditionInputs'
import UserList from './UserList'
import axios from 'axios'
import Kuittisettia from './Kuittisettia'
import {useState} from 'react'


export default function CreateUser(props) {

  
  //const [kayttajankuitit] = useState([]);
  let outputti = <Kuittisettia kayttajankuitit={props.kayttajankuitit}/>
 /* const haeKuitit = async (name) => { //
    kayttajankuitit = await axios.get("http://localhost:3000/kuitti/"+name.name+"")
    
    }*/
  //
  return (
    <div>
        <div>Add user</div>
    <ListAdditionInputs onListAddition2 ={ props.onListAddition2 }/> 
    <div>Userlist</div>
    {outputti}
    {props.users.map(p =><div>{p.name} <button onClick={() => props.haeKuitit(p) }>hae kuitit</button></div>)}

         
      

  </div>
  )}
