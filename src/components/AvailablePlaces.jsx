import Places from './Places.jsx';
import { useState,useEffect } from 'react';
import Error from '../../Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const[places,setplaces]=useState([]);
  const[isfetching,setisfetching]=useState();
  const [error,seterror]=useState()
  useEffect(()=>{
    setisfetching(true)
    
      async function getApi(){
        try{
        const data=await fetch('http://localhost:3000/placesf');
        const json=await data.json();
        if(!data.ok){
          throw new Error('failed to fetch places')
        }
        setplaces(json.places);
    
    
      
    }catch(error){
      seterror({message:error.message || 'could not found places,try again'})
    }
    setisfetching(false);
      }
    getApi();
  },[]);
  
  if (error){
    return <Error title='error occured' message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={places}
      fetching={isfetching}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
