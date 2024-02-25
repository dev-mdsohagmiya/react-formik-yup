import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup"
function Register() {
const formik = useFormik({
    initialValues:{
        name:"",
        email:"",
        password:""
    },
    validationSchema:yup.object({
        name:yup.string().min(2,"name just have atleast 2 characters").required(),
        email:yup.string().email().required(),
        password:yup.string().min(6,"password just have atleast 6 characters").required(),

    }),
    onSubmit:(value)=>{
        console.log(value)
    },
    
  
})

console.log(formik.errors)


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
