import React from 'react'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'

const App = () => {
  return (
    <div className='h-screen bg-blue-500 text-blue-950 flex justify-center items-center px-3 px'>
      <div className='h-[90%] w-[90%] rounded-2xl bg-orange-500 overflow-hidden p-10 flex flex-col justify-between'>
        <Navbar />
        <Searchbar />
      </div>
    </div>
  )
}

export default App