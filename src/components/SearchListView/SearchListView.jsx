import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchItem from './SearchListItem';

function SearchListView(){
    const dispatch = useDispatch();
const farmers = useSelector(store => store.farmerLocations);
const markets = useSelector(store => store.marketLocations);

  useEffect(() => {
    dispatch({type: 'FETCH_FARMER_LOCATIONS'})
    dispatch({type: 'FETCH_MARKET_LOCATIONS'})
  }, [])

    return(
        
        <section >
            <h2>Farmers</h2>
             {
                farmers.map(item => {
                  return (
            <SearchItem  item={item}/>
            )
        })}
        <h2>Markets</h2>
        {
            
                markets.map(item => {
                  return (
            <SearchItem  item={item}/>
            )
        })}
        </section>
    )
}

export default SearchListView;

