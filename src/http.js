export async function fetchAvailablePlaces(){
    const data=await fetch('http://localhost:3000/places');
    const json=await data.json();
    if(!data.ok){
      throw new Error('failed to fetch places')
    }
    return json.places;
}
export async function updateUserplaces(places){
    const response=await fetch('http://localhost:3000/user-places',{
        method:'PUT',
        body:JSON.stringify({places}),
        headers:{
            'Content-Type':'application/json',
        }
    })
    const resData=await response.json();
    if(!response.ok){
        throw new Error('failed to fetch data');
    }
    return resData.message;
}