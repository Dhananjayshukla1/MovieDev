import React from 'react'
import noimage from "../../../public/noimage.jpeg"
import { Link } from 'react-router-dom'
const Header = ({data}) => {
  
  return (
    <div
    style={{ 
      background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)),
      
      url(https://image.tmdb.org/t/p/original/${data.backdrop_path||data.profile_path

    })`, 
    
    backgroundPosition:" center top 10%",
    backgroundSize: 'cover',  
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'darken,luminosity',
    
  
    }}

    className='
    w-full h-[60vh] flex flex-col items-start justify-end p-[8%]
    '
    >
     <h1 className='w-[70%]  text-5xl font-black text-white'>
     {data.name||
      data.title||
      data.original_title||
      data.original_name}
      
      </h1>
      <p
      className='text-white mt-3 mb-3 w-[70%]'>{data.overview.slice(0,200)}...
      <Link className='text-blue-400'>more</Link>
      </p>

      <p className='text-white'>
         <i className='ml-5 text-yellow-500 ri-megaphone-fill'></i>{" "}
         {data.first_air_date||data.release_date}
         <i className='ml-5 text-yellow-500 ri-movie-fill'></i>{" "}
         {data.media_type.toUpperCase()}
      </p>
      <Link className='mt-5 -mb-16 font-semibold bg-[#6556CD] p-3 rounded text-white'>
      {" "}
      Watch Trailer
      </Link>

    </div>
  )
}

export default Header
