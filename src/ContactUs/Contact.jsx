import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

function Contact() {
  return (
   <>
      <Navbar/>
   <div className='min-h-screen'> 
    <ContactUs/>
   </div>
   <Footer/>
   </>
  )
}

export default Contact