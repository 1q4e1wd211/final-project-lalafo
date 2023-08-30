import React from 'react'
import Input from './components/Input'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='fixed w-[100%] h-[100vh] bg-gradient-to-r from-sky-500 to-indigo-500'>
      <div className='flex justify-center'>
        <Nav/>
        <Input />
      </div>
     
    </div>
  )
}

export default App
