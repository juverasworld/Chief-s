import { Link } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import "../App.css"
import ella from "../images/ella.jpg"
import { profileValidation } from "../helper/validate";
import { useState } from "react";
import convertToBase64 from "../helper/convert";
import extend from "../styles/Profile.module.css";
const Profile = () => {
    const [file, setFile] = useState()
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            address: ""
        },
        validate: profileValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values, { profile: file || "" })
            console.log(values)
        }
    })
    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0])
        setFile(base64)
    }

    return (

        <div className="container mx-auto">
            <Toaster position="top-center" reverseOrder={false} ></Toaster>
            <div className="flex justify-center items-center h-screen">
                <div className="border-2 shadow-inner px-16 py-10 rounded-lg">
                    <div className="title flex flex-col items-center">
                        <h4 className="text-2xl font-bold">Profile</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            You can update the details
                        </span>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="py-1">
                        <div className="profile flex justify-center py-4">
                            <label htmlFor="profile">

                                <img src={file || ella} alt="image" className="w-20 rounded-full h-20 border-2" />
                            </label>
                            <input onChange={onUpload} type="file" id="profile" name="profile" />
                        </div>
                        <div className=" flex flex-col  gap-6">
                            <div className="name flex w-3/4 gap-10">
                                <input {...formik.getFieldProps("firstName")} type="text" placeholder="firstName" className="border-2 border-gray px-3 py-2 outline-none" />
                                <input {...formik.getFieldProps("lastName")} type="text" placeholder="lastName" className="border-2 border-gray px-3 py-2 outline-none" />
                            </div>
                            <div className="name flex w-3/4 gap-10">
                                <input {...formik.getFieldProps("mobile ")} type="text" placeholder="mobile No " className="border-2 border-gray px-3 py-2 outline-none" />
                                <input {...formik.getFieldProps("email")} type="text" placeholder="email" className="border-2 border-gray px-3 py-2 outline-none" />
                            </div>

                            <div className="name flex w-3/4 gap-10">
                                <input {...formik.getFieldProps("address")} type="text" placeholder="Address" className="border-2 border-gray px-3 py-2 outline-none w-full" />

                            </div>

                            <button type="submit" className=" bg-black text-white rounded-r-lg px-5 py-[10px] hover:bg-gray-900" > Update</button>
                        </div>
                        {/* className="  */}
                        <div className="text-center py-4">
                            <span> Come back later <Link className="bg-gray-400 text-white rounded-lg px-5 py-[10px] hover:bg-slate-600" to="/"> Login Out</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;