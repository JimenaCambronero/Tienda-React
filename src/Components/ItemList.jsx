import React from "react"
import Item from "./Item"

  const ItemList = ({items}) => {

  return (
  <div className="grid w-4/5 h-full grid-cols-1 gap-3 m-auto mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-7xl bg-gradient-to-b from-gray-100">
       
        
        {items.map((i) => (
        <Item key={i.id} list={i}/>    
        ))}
        
       
  </div>
    
 )
};
export default ItemList;
