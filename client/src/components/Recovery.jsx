import{ Link }from "react-router-dom"
import { Toaster } from "react-hot-toast";
import {useFormik} from "formik";
import { passwordValidate } from "../helper/validate";
const Recovery= () => {
   
    return ( 

       <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false} ></Toaster>
        <div className="flex justify-center items-center h-screen">
            <div>
                <div className="title flex flex-col items-center">
                    <h4 className="text-5xl font-bold">Recovery</h4>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                       Enter OTP to get back in
                    </span>
                </div>
                <form  className="pt-20">
                    
                    <div className="textbox flex flex-col items-center gap-6">
                        <div className="input text-center">
                        <span className="py-4 text-left text-gray-500">
                            Enter the 6 digit otp sent to your email
                        </span>
                        <input type="password" placeholder="OTP" />
                        <button type="submit"> Sign in</button>
                        </div>
                    </div>
                    <div className="text-center py-4">
<span> Can't get OTP? <button className="text-red-500"> Resend</button></span>
                    </div>
                </form>
            </div>
        </div>
       </div>
     );
}
 
export default Recovery;