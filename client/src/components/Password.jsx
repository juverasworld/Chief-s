import{ Link }from "react-router-dom"
import { Toaster } from "react-hot-toast";
import {useFormik} from "formik";
import ella from "../images/ella.jpg"
import { passwordValidate } from "../helper/validate";
const Password   = () => {
    const formik = useFormik({
        initialValues:{
            password: ""
        },
        validate : passwordValidate,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit  :async values =>{
           console.log(values) 
        }   
    })
    return ( 

       <div className="container mx-auto ">
        <Toaster position="top-center" reverseOrder={false} ></Toaster>
        <div className="flex justify-center items-center h-screen">
            <div className="border-2 px-16 py-10 rounded-xl shadow-inner hover:shadow-xl">
                <div className="title flex flex-col items-center ">
                    <h4 className="text-2xl font-bold">Enter Your Password </h4>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                       
                    </span>
                </div>
                <form onSubmit={formik.handleSubmit} className="py-1">
                    <div className="profile flex justify-center py-4">
<img src={ella} className="w-20 rounded-full h-20 border-2" alt="image" />
                    </div>
                    <div className="textbox">
                        <input {...formik.getFieldProps("password")} type="password" placeholder="Password" className="border-2 border-gray px-3 py-2 outline-none" />
                        <button type="submit" className=" bg-black text-white rounded-r-lg px-5 py-[10px]"> Sign in</button>
                    </div>
                    <div className="text-center py-4">
<span> Forgot Password? <Link className="text-red-500" to="/recovery"> Recover Now</Link></span>
                    </div>
                </form>
            </div>
        </div>
       </div>
     );
}
 
export default Password;