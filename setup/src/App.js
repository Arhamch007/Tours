import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [loading,setLoading]=useState(true);
  const [tourData,setTourData]=useState([]);

  const fetchData= async ()=>{
    try {
      
    const response= await fetch(url);
    const data= await response.json();
    setTourData(data);
    setLoading(false)
    } catch (error) {
      setLoading(false);
      console.log("error");
    }

  }
  const deleteData=(id)=>{

    const newArray= tourData.filter((tour)=>tour.id !== id);
    setTourData(newArray);


  }
  useEffect(()=>{
    fetchData()
  },[])

  if(tourData.length===0){
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    )

  }

  if (loading){
    return <main>
      <Loading/>
    </main>
  }
  return <Tours tours={tourData} removeData={deleteData}/>
}

export default App
