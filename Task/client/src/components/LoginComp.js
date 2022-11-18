import "../App.css";
import { useFormik } from "formik";
//import { useState } from "react";
import React from "react";
import axios from "axios";

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
export default function Login(){

async function handle(){
  const url="http://localhost:4000/api/codis/admin/login"
  await axios.post(url,{
    email:formik.values.email,
    password:formik.values.password
  })
  .then(res=>{
    console.log(res.data);
    localStorage.setItem('x-auth',res.data)
    let token=localStorage.getItem('x-auth')
    // console.log(token)
  })
  .catch(error=>{
    alert("Something Went Wrong")
  })
}
 
const formik = useFormik({
   
  initialValues: {
      email: "",
      password:"",
    },

    onSubmit: (values) => {
      toast.success("Account Created Successfully");
      handle()
      
    },

    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if(!values.password) errors.password="Required"
      return errors;
    }
  });


  
    return(
        <>
       
    <div >
      {/* <h3  class='success'>Login</h3> */}
      <div class="login">
     <h1 class='flicker'>login</h1>
    </div>
    <form class='log' novalidate onSubmit={formik.handleSubmit}>

  <div class="cform">
    <label for="validationCustom02" class="form-label">Email Address</label>
    <input type="email" class="form-control" id="email" placeholder="Enter Mail-Id" required
     value={formik.values.email}
     onChange={formik.handleChange}/>
    <div class="valid-feedback">
      Looks good!
    </div>
    
  </div>
  
  <div class="cform">
    <label for="validationCustom03" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" required
    value={formik.values.password}
    onChange={formik.handleChange}/>
    <div class="invalid-feedback">
      Please provide a max 8 chacter.
    </div>
  </div>
    <div class="col-12">
    <button class="btn btn-danger" type="submit" onClick={handle}>Login</button>
  </div> 
</form>
</div>
 
   <ToastContainer />

 
 
        </>
    )
}