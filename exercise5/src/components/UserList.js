import React from 'react';

export default function UserListContent(props) {
  return (
  <div>
      <ul>
          {
              props.listItems.map((item, index) => {
                      return <li  key={index}> 
                      {item.name} { item.saldo }
                      </li>;
                }
              )
          }
      </ul>
      

  </div>)
}
