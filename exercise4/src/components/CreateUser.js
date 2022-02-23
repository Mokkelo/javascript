import React from 'react'
import ListAdditionInputs from './ListAdditionInputs'
import UserList from './UserList'


export default function CreateUser(props) {
  return (
    <div>
        <div>Add user</div>
    <ListAdditionInputs onListAddition2 ={ props.onListAddition2 }/> 
    <div>Userlist</div>
    <UserList listItems = {props.users} />
    
    </div>

  )
}
