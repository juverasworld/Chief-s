import { Link } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import "../App.css"
import message from "../images/message.jpg"
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
                <div>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Profile</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            You ca update the details
                        </span>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="py-1">
                        <div className="profile flex justify-center py-4">
                            <label htmlFor="profile">

                                <img src={file || message} alt="image" />
                            </label>
                            <input onChange={onUpload} type="file" id="profile" name="profile" />
                        </div>
                        <div className=" flex flex-col items-center gap-6">
                            <div className="name flex w-3/4 gap-10">
                                <input {...formik.getFieldProps("firstName")} type="text" placeholder="firstName" />
                                <input {...formik.getFieldProps("lastName")} type="text" placeholder="lastName" />
                            </div>
                            <div className="name flex w-3/4 gap-10">
                                <input {...formik.getFieldProps("mobile ")} type="text" placeholder="mobile No " />
                                <input {...formik.getFieldProps("email")} type="text" placeholder="email" />
                            </div>

                            <div className="name flex w-3/4 gap-10">
                                <input {...formik.getFieldProps("address")} type="text" placeholder="Address" />
                                
                            </div>
                           
                            <button type="submit"> Update</button>
                        </div>
                        <div className="text-center py-4">
                            <span> Come back later <Link className="text-red-500" to="/"> Login Out</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;