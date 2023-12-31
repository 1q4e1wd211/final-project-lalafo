import React from 'react'
import Filter from './components/Filter'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

const App = () => {
  return (
    <div className=''>
      <Nav/>
      <Routes>
        <Route path='/' element={<Filter/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
