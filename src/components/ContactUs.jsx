import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';

function ContactUs() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
   <>
   {/* <div className='flex h-screen items-center justify-center'> */}
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex h-screen items-center justify-center'>
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>

 
    <h1 className="font-bold  text-[35px]">Contact Us</h1>
   
{/* name */}
<div className='mt-4 space-y-2'>
    <span>Name</span> <br />
    <input type="text" placeholder='Enter your fullname' className='w-[550px]  px-3 py-1 border rounded-md outline-none' {...register("name", { required: true })}  />
    <br />
    {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
   </div>

{/* email */}
   <div className='mt-4 space-y-2'>
    <span>Email</span> <br />
    <input type="email" placeholder='Enter your Email' className='w-[550px] px-3 py-1 border rounded-md outline-none'  {...register("email", { required: true })}  />
    <br />
    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
   </div>

{/* password */}
   <div className='mt-4 space-y-2'>
   <span>Message</span> <br />
   <textarea  rows="4" cols="50"  placeholder='Type your message' className='w-[550px] px-3 py-1 border rounded-md outline-none' {...register("message", { required: true })} />
   <br />
   {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
   </div>
   {/* button */}
   <div className=' mt-4'>
    <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
   </div>



   </form>
  </div>
  {/* </div> */}
   </>
  )
}

export default ContactUs