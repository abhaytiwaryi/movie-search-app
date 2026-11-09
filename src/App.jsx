import React from 'react'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'

const App = () => {
  return (
    <div className='h-screen bg-black text-green-400 flex justify-center items-center px-3 px'>
      <div className='h-[90%] w-[90%] rounded-2xl bg-white overflow-hidden p-10 flex flex-col justify-between'>
        <Navbar />
        <Searchbar />
      </div>
    </div>
  )
}

export default App