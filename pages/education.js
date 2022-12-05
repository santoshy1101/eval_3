import React from 'react'

const education = () => {

    const exp=[
        {
          id:1,
          ex:"SUDENT at Masai School",
          time:"May 2022 - Prsent"
    
        },
        {
          id:2,
          ex:"Btech at IET Collage Alwar",
          time:"August 2018 -  March 2022"
    
        },
        {
          id:3,
          ex:"12th at Modern Academy",
          time:"May 2016 - June 2018"
        },
    
      ]

  return (
<div className='h-screen'>
    <div className=' w-full h-full p-8 bg-slate-800'>
    {
      exp.map(({id,ex,time})=>(
        <div key={id}>
        <div className='flex space-x-4 my-5 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' >
     
    
    
        <div className='text-white p-2 rounded-full bg-green-400'>{id}</div>
          <div>
          <h2>{ex}</h2>
          <h3>{time}</h3>
          </div>
       
        </div>
        
        </div>
      ))
    }
 
   
    </div>
    </div>

  )
}

export default education