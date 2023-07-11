import toast from "react-hot-toast";

// validate login page username
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);
    return errors
}
// password verify
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);
    return errors
}

// validate resety password
export async function resetpasswordValidate(values){
    const errors = passwordVerify({}, values);
   if(values.password !==values.confirm_pwd){
    errors.exist =toast.error("Password does not match")
   }
   return errors
}

// validate register function
export async function registerValidation(values){
    const errors = usernameVerify({}, values);
passwordVerify(errors, values); 
emailVerify(errors, values);  

return errors
}

// validate password;
function passwordVerify( errors ={}, values){

    if (!values.password) {
        errors.password =toast.error("Password Required ...!")
    }else if(values.password.includes(" ")){
        errors.password =toast.error("Wrong Password ...!")

    }
    else if(values.password.length < 4){
        errors.password =toast.error("Password must be greater than just 4 charcters")
    }
  
   return errors;
}

// Validate Username
function usernameVerify(error ={}, values){
    if(!values.username){
    error.username = toast.error("Username is required ...")
    } else if(!values.username.includes(" ")){
        error.username = toast.error("Invalid username ...!")

    }
    return error;
}
// validate email

function emailVerify(error ={}, values){
    if(!values.email){
error.email = toast.error("Email is required ...");
    } else if(!values.email.includes(" ")){
        error.email = toast.error("Invalid email ...!")
    }else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
       error.email = toast.error("Invalid email address ...!" )
    }
return error;
}