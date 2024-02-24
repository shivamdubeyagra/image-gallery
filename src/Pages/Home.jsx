import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import './Home.css';
const Home = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
      fetchData();
    },[])
    console.log(data)
    const fetchData = async() =>{
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        const resData = await response.json();
        setData(resData.slice(0,25));
      }catch(error){
        console.log(error)
      }

    }
  return (
    <div className='card-grid'>
      {data.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  )
}

export default Home