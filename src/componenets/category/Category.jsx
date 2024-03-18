import axios from 'axios';
import React, { useEffect, useState } from 'react'
import gdata from './gdata';

export default function Category() {
  const [data, setData] = useState([]);

  const getData = async function () {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=33e3644d083134cd8067dff145dfaad6"
      );
      setData(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
function filterData(){
  
}
  return (
    <>
    <div style={{position:'relative', top:'70px'}} >{gdata.map((item)=>{
      return <button className='btnC btn-danger'>{item.name}</button>
    })}</div>
    <div style={{display:'flex-box',paddingTop:'100px'}}>
    {data.map((item, i) => (
            <img 
            style={{borderRadius:'5px',width:'300px',height:'200px',margin:'5px'}}
              key={i}
              alt=""
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            />
    ))}
    </div>
    </>
    
  )
}
