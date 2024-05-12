import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from '../../src/Utils/axios'
import Header from './partials/Header'
import HorizontalCards from './partials/HorizontalCards'
const Home = () => {
  document.title="Home"
  const [wallpaper,setwallpaper] =useState(null)
  const [trendings,settrendings]= useState(null)

  const GetHeaderWallpaper= async ()=>{
    try {
      const {data} = await axios.get(`/trending/all/day`)
      let randomdata= data.results[(Math.random()*data.results.length).toFixed()]
      setwallpaper(randomdata)
    }
    catch(err){
      console.log(err)
    }
  }


  const Gettrendings= async ()=>{
    try {
      const {data} = await axios.get(`/trending/all/day`)
    
      settrendings(data.results)
    }
    catch(err){
      console.log(err)
    }
  }

useEffect(()=>{
  !wallpaper && GetHeaderWallpaper()
  , !trendings && Gettrendings()
},[]
)

  return wallpaper && trendings? (
    < >
    <Sidenav/> 
      <div className='w-[80%] overflow-x-hidden overflow-auto h-full '>
      <Topnav></Topnav>
      <Header data={wallpaper}></Header>
      <HorizontalCards dat={trendings}></HorizontalCards>
      </div>
    </>
  ): <h1>Loading...</h1>
}

export default Home
