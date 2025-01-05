import React from 'react'

const card = ({name,discription,s1,s2,s3}) => {
  return (

    <section className='overflow-hidden'>
        

        <div className='min-h-56 bg-zinc-100 max-w-72 m-8 p-5 shadow-lg shadow-slate-700' >
<h1 className=' font-bold text-zinc-950 text-xl text-center mb-6  '>{name}</h1>
<h3 className='text-justify text-xs'>{discription}</h3>
<div className='flex justify-between items-baseline p-4 text-blue-900 font-bold text-sm'>
    <div className='text-center rounded-md  text-white border border-red-500 w-1/4  bg-red-700' >{s1}</div>
    <div className='text-center rounded-md  text-white border border-red-500 w-1/4 bg-red-700' >{s2}</div>
    <div className='text-center rounded-md  text-white border border-red-500 w-1/4 bg-red-700' >{s3}</div>
</div>
        </div>

    </section>

    )
}

export default card