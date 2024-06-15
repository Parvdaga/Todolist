"use client"
import React, { useState } from 'react'

const page = () => {
  const[title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [main, setmain] = useState([])

  const submitHandler =(e)=>{
    e.preventDefault();
    setmain([...main,{title, desc}]);
    settitle("");
    setdesc("");
    console.log(main)
  }
const deleteHandler =(i) => {
  let copytask=[...main];
  copytask.splice(i,1)
  setmain(copytask)
}

  let renderTask = <h2 className='text-xl font-medium'>No Task Assigned</h2>;

if (main.length>0) {
  renderTask=main.map((t,i)=>{
    return <li key={i} className='flex items-center justify-between'> 
      <div className='flex items-center justify-between mb-4 w-3/4'>
      <h5 className='text-xl font-base'>{t.title}</h5>
      <h6 className='text-lg font-medium'>{t.desc}</h6>
    </div>
    <button onClick={()=> {
        deleteHandler(i)
      }}  className='bg-red-500 text-white rounded px-4 py-2 font-semibold mb-4'>Delete</button>
    </li>
  })
}
  
  

  return (
    <>
    
    <div className='border-2 border-gray-500 m-2 rounded pb-10'>
    <h1 className='bg-black text-white text-4xl  font-Nunito text-center font-medium p-5 rounded mx-[5%] my-[1%]'>Parv's Todo List</h1>
    <form onSubmit={submitHandler} className='space-x-4 mx-[8%] mt-10 '>
      <input 
      type='text' 
      className='text-l border-zinc-800 border-2 rounded-sm p-2 ' 
      placeholder='Enter Task Here!!'
      value={title}
      onChange={(e) =>{
        settitle (e.target.value)
      }}
      />
      <input 
      type='text' 
      className='text-l border-zinc-800 border-2 rounded-sm p-2 ' 
      placeholder='Enter Description Here!!'
      value={desc}
      onChange={(e) =>{
        setdesc (e.target.value)}}
      />
      <button className='bg-black text-white p-2 text-center ml-4 rounded-lg'>Add Task</button>
    </form >
    <hr className='w-3/4 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 ' />
    <div className='bg-slate-200 text-black text-center p-8  mx-[8%]'>
          <ul>
            {renderTask}

          </ul>

    </div>
    </div>
    </>
  )
}

export default page
