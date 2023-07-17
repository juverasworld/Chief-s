import{ Link }from "react-router-dom"
import { Toaster } from "react-hot-toast";
import {useFormik} from "formik";
import "../App.css"
import ella from "../images/ella.jpg"
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
            <div className="border-2 shadow-inner hover:shadow-lg px-10 rounded-lg py-10">
                <div className="title flex flex-col items-center">
                    <h4 className="text-2xl font-bold">Register</h4>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                    Welcome !!!
                    </span>
                </div>
                <form onSubmit={formik.handleSubmit} className="py-1">
                    <div className="profile flex justify-center py-4">
           <label htmlFor="profile">

           <img src={file || ella} alt="image" className="w-20 rounded-full h-20 border-2" />
            </label>  
            <input onChange={onUpload} type="file" id="profile" name="profile"     />           
                    </div>
                    <div className="textbox flex flex-col">
                        <input {...formik.getFieldProps("email")} type="email" placeholder="email" className="border-2 border-gray px-3 py-2 outline-none my-2 rounded-sm"/>
                        <input {...formik.getFieldProps("username")} type="text" placeholder="username" className="border-2 border-gray px-3 py-2 outline-none my-2 rounded-sm" />
                        <input {...formik.getFieldProps("password")} type="password" placeholder="Password" className="border-2 border-gray px-3 py-2 outline-none my-2 rounded-sm"/>
                        <button type="submit" className=" bg-black text-white rounded-r-lg px-5 py-[10px] hover:bg-gray-900 my-4"> Register</button>
                    </div>
                    <div className="text-center py-4">
<span> Already a  member? <Link className="text-red-500 hover:text-black" to="/"> Login now</Link></span>
                    </div>
                </form>
            </div>
        </div>
       </div>
     );
}
 
export default Register;