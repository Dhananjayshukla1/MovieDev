import React from 'react'

const HorizontalCards = ({dat}) => {
    console.log(dat)
  return (
    <div className='w-full h-[40vh] p-5'>
        <div className='mb-5'>
        <h1 className='text-3xl font-semibold text-zinc-400'>
        Trending
        
        </h1>
        
        </div>

        <div className='w-[100%]  flex overflow-y-hidden '>
           {dat.map((d,i)=>(
            <div key={i} className='min-w-[15%]  mr-5 '>
             <img 
             className='w-full  object-cover'
             src={`https://image.tmdb.org/t/p/original/${d.backdrop_path||d.profile_path

            }`} alt="" />




            <h1 className=' text-lg font-mono font-black text-white'>
     {d.name||
      d.title||
      d.original_title||
      d.original_name}
      
      </h1>
      <p
      className='text-white font-light mt-3 mb-3 '>{d.overview.slice(0,50)}...
      <span className='text-blue-400'>more</span>
      </p>
            </div>
           ))}
        
        
        </div>
      
      
    </div>
  )
}

export default HorizontalCards
