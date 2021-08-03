import React from 'react'
import { useSelector } from 'react-redux';

function ItemList(){
const items = useSelector(store => store.farmerReducer)

    return(
        <p>'this will be a maped list of items'</p>
    )
}

export default ItemList;