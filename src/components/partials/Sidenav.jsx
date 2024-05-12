import React from 'react'
import { Link } from 'react-router-dom'
const Sidenav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10' >
    
    <h1 className='text-2xl -m-5 text-white font-bold'>
    
    <i className=" ri-tv-fill mr-2"></i>
    
    <span className='text-2xl'>SCSDB</span>
    </h1>

    <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
    <h1 className='text-white font-semibold text-xl mt-10 mb-1'>New Feeds
    </h1>

    <Link className='hover:bg-[#6556CD]  text-zinc-400    hover:text-white duration-300 rounded-lg pl-5 pr pt-3 pb-3 '>
    <i className="mr-2 ri-fire-fill"></i>Trending</Link>
    <Link className='hover:bg-[#6556CD] text-zinc-400   hover:text-white duration-300 rounded-lg pl-5 pr pt-3 pb-3'>
    <i className="mr-2 ri-bard-fill"></i>Popular</Link>
    <Link className='hover:bg-[#6556CD]  text-zinc-400  hover:text-white duration-300 rounded-lg pl-5 pr pt-3 pb-3'>
    <i className="mr-2 ri-movie-2-fill"></i>Movies</Link>
    <Link className='hover:bg-[#6556CD]  text-zinc-400  hover:text-white duration-300 rounded-lg pl-5 pr pt-3 pb-3'>
    <i className="mr-2 ri-tv-2-fill"></i>Tv Shows</Link>
    <Link className='hover:bg-[#6556CD]  text-zinc-400  hover:text-white duration-300 rounded-lg pl-5 pr pt-3 pb-3'>
    <i className="mr-2 ri-team-fill"></i>People</Link>
    </nav>


    <hr className='-mb-4 border-none h-[1px] bg-zinc-400 ' />
    

    <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
    <h1 className='text-white font-semibold text-xl mt-10 mb-1'>New Feeds
    </h1>

    <Link className='hover:bg-[#6556CD]  text-zinc-400    hover:text-white duration-300 rounded-lg pl-5 pr pt-3 pb-3 '>
    <i className="mr-2 ri-information-fill"></i>Information</Link>
    <Link className='hover:bg-[#6556CD] text-zinc-400   hover:text-white duration-300 rounded-lg pl-5 pr pt-3 pb-3'>
    <i className="mr-2 ri-phone-fill"></i>Contact</Link>

    </nav>

    
    </div>
  )
}

export default Sidenav
