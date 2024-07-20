import React from 'react'

function ProductCard({heading,btncolor}) {
  return (
    <div className=''>
        <div className='flex flex-col gap-4  text-white max-w-44 w-full bg-slate-950 rounded-3xl p-2 '>
            <h1 className=' text-3xl font-AntonSC tracking-wider text-center '>{heading}</h1>
            <p className='text-[10px] text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A vero ad aut ex repudiandae!</p>
            <button className={` px-4 py-2 rounded-full font-bold uppercase ${btncolor == 'blue'?'bg-blue-400':'bg-orange-600'}`}>Get Started</button>
        </div>
    </div>
  )
}

export default ProductCard