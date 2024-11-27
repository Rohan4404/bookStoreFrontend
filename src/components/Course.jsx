import React from 'react'
import Cards from './Cards';
import list from "../../public/list.json"
import { Link } from 'react-router-dom';
function Course() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='pt-28 items-center justify-center text-center'>
      <h1 className='text-2xl md:text-4xl'>We're delighted to have you
        <span className='text-pink-500'> Here!:)</span> 
        </h1>  
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos voluptates. 
          Excepturi adipisci unde quo veritatis? Ratione quia fugiat error et, architecto iure illum 
          iste mollitia eos libero minima sunt dolorum? Et obcaecati expedita laboriosam
           ipsum atque numquam alias, quos hic recusandae quaerat assumenda fugit Lorem ipsum dolor 
           sit amet consectetur adipisicing elit. Veniam, odio!.</p>
          <Link to='/'>
          <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
          </Link> 
            
 <div className='mt-12 grid grid-cols-1 md:grid-cols-4'> 
  {
   list.map((item)=>(
    <Cards key={item.id} item={item}/>
   ))
  }
 </div>
 </div>
   </div>
    </> 
  );
}

export default Course