import React from 'react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { listData}  from '../data/listData'
 

const ItemDetailContainer = () => {



  const {itemId } = useParams()

  const [item, setItem] = useState({})
  const [loading, setLoading] = useState (true)

  useEffect(() => {
   getItem().then (data => {
     setItem (data)
     setLoading (false)
   })
  }, 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [itemId])
  

  const getItem = () => {
    return new Promise( (resolve) => {
      setTimeout( () => {
        resolve(listData.find(i => i.id == itemId))
      }, 2000);
    })
  }

  return (
    <div>
      {
      loading ? <p>Loading...... :) </p>:
      <ItemDetail item={item}> </ItemDetail>
      }
    </div>
  )
  }
   
export default ItemDetailContainer;