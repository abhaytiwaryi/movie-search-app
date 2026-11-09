import React from 'react'

const Searchbar = () => {
  return (
    <div className='flex justify-center'>
        <input className='w-full h-10 font-merriweather border border-black p-2 rounded ' type="text" placeholder='Enter movie name here ' />
    </div>
  )
}

export default Searchbar