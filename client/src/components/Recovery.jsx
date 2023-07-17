import{ Link }from "react-router-dom"
import { Toaster } from "react-hot-toast";
import {useFormik} from "formik";
import { passwordValidate } from "../helper/validate";
const Recovery= () => {
   
    return ( 

       <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false} ></Toaster>
        <div className="flex justify-center items-center h-screen">
            <div className="border-2 px-10 py-16 rounded-xl shadow-inner hover:shadow-lg">
                <div className="title flex flex-col items-center">
                    <h4 className="text-2xl font-bold">Recover Password</h4>
                    <span className="py-4 text-sm w-2/3 text-center text-gray-500">
                       Enter OTP to get back in
                    </span>
                </div>
                <form  className="pt-5">
                    
                    <div className="textbox flex flex-col items-center gap-6">
                        <span className="py-2 text-left text-gray-500">
                            Enter the 6 digit otp sent to your email
                        </span>
                        <div className="input text-center flex ">
                        <input type="password" placeholder="OTP" className="border-2 border-gray px-3 py-2 outline-none"/>
                        <button type="submit"className=" bg-black text-white rounded-r-lg px-5 py-[10px]"> Sign in</button>
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