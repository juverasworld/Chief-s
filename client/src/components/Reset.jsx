import{ Link }from "react-router-dom"
import { Toaster } from "react-hot-toast";
import {useFormik} from "formik";
import { resetpasswordValidate } from "../helper/validate";
const Reset   = () => {
    const formik = useFormik({
        initialValues:{
            password: "",
            confirm_pwd: ''
        },
        validate : resetpasswordValidate,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit  :async values =>{
           console.log(values) 
        }   
    })
    return ( 

       <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false} ></Toaster>
        <div className="flex justify-center items-center h-screen">
            <div>
                <div className="title flex flex-col items-center">
                    <h4 className="text-5xl font-bold">Reset Password</h4>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                      Change password
                    </span>
                </div>
                <form onSubmit={formik.handleSubmit} className="py-20">
                   
                    <div className="textbox">
                        <input {...formik.getFieldProps("password")} type="password" placeholder="new Password" />
                        <input {...formik.getFieldProps("confirm_pwd")} type="password" placeholder="Repeat Password" />
                        <button type="submit"> Sign in</button>
                    </div>
                  
                </form>
            </div>
        </div>
       </div>
     );
}
 
export default Reset;