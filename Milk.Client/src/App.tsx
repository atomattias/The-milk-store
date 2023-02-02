import React, { FormEvent, useEffect, useState } from 'react';
import './App.css';
import { BiSearch } from 'react-icons/bi';
function App() {
  const [milkFound, setMilkFound] = useState([]);
  const [milkSearch, setMilkSearch] = useState('');
  const searchForMilk=async (query:string) : Promise<any>=> {
    const result =await fetch(`http://localhost:3001/?search=${query}`);
    return (await result.json()).results;
  }
  const search = (event:FormEvent<HTMLFormElement>) =>{
event.preventDefault();
const form =event.target;
//const input = form.querySelector('#searchText')
  }
  useEffect(()=>{
    (async () => {
      
      const query = encodeURIComponent(milkSearch);
      if(query){
      const response = await searchForMilk(query);
      setMilkFound(response);
      }
    })();
  }, [milkSearch]);
  return (
   
    <div className="flex-1 p-10 ">
    <h1 className='text-4xl text-pink-200 p-6 text-center'>THE MILK STORE</h1>
   <div className='flex-1 bg-pink-200 flex-row justify-between'>
      <input className='border-2 rounded-2xl font-' id="searchText" type="text" placeholder="&#xF002; search users"/>
      <BiSearch/>
   
    
    </div>
  </div>
  );
}

export default App;
