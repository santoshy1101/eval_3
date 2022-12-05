import React from 'react'

const Skills = () => {
    const tech=[
        {
          id:1,
          tec:"HTML"
        },
        {
          id:2,
          tec:"CSS"
        },
        {
          id:3,
          tec:"JAVASCRIPT"
        },
        {
          id:4,
          tec:"REACT"
        },
        {
          id:5,
          tec:"CHAKRA-UI"
        },
        {
          id:6,
          tec:"GIT"
        },
        {
          id:7,
          tec:"TAILWIND"
        },
      ]
    
  return (
    <div className='h-screen bg-slate-800 '>
    
    <div className='w-full  grid grid-cols-2 gap-4 text-center   p-8 bg-slate-800'>
    {
      tech.map(({id,tec})=>(
        <div key={id} className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>{tec}</div>

      ))
    }

    
    </div>
    </div>
  )
}

export default Skills