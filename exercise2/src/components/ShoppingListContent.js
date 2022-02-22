import React from 'react';

export default function ShoppingListContent(props) {

        function onListItemClick(element) {
            props.itemClickedEvent(element);

}


  return (
  <div>
      <ul>
          {
              props.listItems.map((item, index) => {
                     //let classValue = "";
                     //if(item.isChecked){
                     ///\    classValue = "isChecked";
                     //}
                      return <li onClick={() => onListItemClick(item) } key={index} className={item.isChecked ? "isChecked" : null}> 
                      {item.qty} { item.name }
                      </li>;
            

                }

              )
          }
          
          
          
          
          </ul>
      

  </div>)
}
