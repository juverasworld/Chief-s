import{ Link }from "react-router-dom"
import { Toaster } from "react-hot-toast";
import {useFormik} from "formik";
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

       <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false} ></Toaster>
        <div className="flex justify-center items-center h-screen">
            <div>
                <div className="title flex flex-col items-center">
                    <h4 className="text-5xl font-bold">Hello Again</h4>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                        Explore more
                    </span>
                </div>
                <form onSubmit={formik.handleSubmit} className="py-1">
                    <div className="profile flex justify-center py-4">
<img src="" alt="image" />
                    </div>
                    <div className="textbox">
                        <input {...formik.getFieldProps("password")} type="password" placeholder="Password" />
                        <button type="submit"> Sign in</button>
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