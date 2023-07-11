import{ Link }from "react-router-dom"
import { Toaster } from "react-hot-toast";
import {useFormik} from "formik";
import "../App.css"
import message from "../images/message.jpg"
import { registerValidation } from "../helper/validate";
import { useState } from "react";
import convertToBase64 from "../helper/convert";
const Register   = () => {
    const [file, setFile] =useState()
    const formik = useFormik({
        initialValues:{
            email:"",
            username:"",
            password: ""
        },
        validate : registerValidation,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit  :async values =>{
            values = await Object.assign(values, {profile:file ||""})
           console.log(values) 
        }   
    })
const onUpload = async e=>{
    const base64 = await convertToBase64(e.target.files[0])
    setFile(base64)
}

    return ( 

       <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false} ></Toaster>
        <div className="flex justify-center items-center h-screen">
            <div>
                <div className="title flex flex-col items-center">
                    <h4 className="text-5xl font-bold">Register</h4>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                     Happy to join us
                    </span>
                </div>
                <form onSubmit={formik.handleSubmit} className="py-1">
                    <div className="profile flex justify-center py-4">
           <label htmlFor="profile">

<img src={file || message} alt="image" />
            </label>  
            <input onChange={onUpload} type="file" id="profile" name="profile"     />           
                    </div>
                    <div className="textbox">
                        <input {...formik.getFieldProps("email")} type="email" placeholder="email" />
                        <input {...formik.getFieldProps("username")} type="text" placeholder="username" />
                        <input {...formik.getFieldProps("password")} type="password" placeholder="Password" />
                        <button type="submit"> Register</button>
                    </div>
                    <div className="text-center py-4">
<span> Already a  member? <Link className="text-red-500" to="/"> Login now</Link></span>
                    </div>
                </form>
            </div>
        </div>
       </div>
     );
}
 
export default Register;