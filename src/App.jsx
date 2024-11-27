import React from 'react'
import Home from './Home/Home'
import Courses from '../src/courses/Courses'
import Signup from '../src/components/Signup'
import Login from '../src/components/Login'
import Contact from '../src/ContactUs/Contact'
import {Route,Routes} from "react-router-dom"


function App() 
{
  return (
    <>
    {/* <Home></Home> */}

<div className=''>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Courses/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/contactUs' element={<Contact/>}/>
    
    
   </Routes>
</div>
    </>
  )
}

export default App