import User from "../model/User.model.js";
// import {Jwt} from "jsonwebtoken"
import bcrypt from "bcrypt";
// import ENV from "../config.js"
/** POST : https://localhost:8080/api/register
 * @param : {
 "username": "example123",
 "password" : "admin123",
 "email" : "example@gmail.com"
 "firstnname": "bill",
 "lastname" : "willam",
 "mobile" : 080383838383,
 "address" " Apt 556, kulu Light, Gwenborough"
 "profile" :""
 * } 
 */
export async function register(req, res) {
    // console.log(req.body)
    try {
        const { username, password, email, profile } = req.body;
        // to check for the existing user
        const existUsername = User.findOne({username});
        // console.log(existUsername);


        // to check for the existing email
        const existPassword = new Promise((resolve, reject) => {
            User.findOne({ email }, function (err, user) {
                if (err) reject(new Error(err))
                if (user) reject({ error: "Please use unique email" });
                resolve();

            })
        })

        Promise.all([existUsername, existEmail]).then(() => {
            if (password) {
                bcrypt.hash(password, 10)
                    .then(hashedPassword => {
                        const user = new User({
                            username,
                            password: hashedPassword,
                            profile: profile || "",
                            email
                        })
                        // return save  result as a response
                        user.save()
                        .then(result =>res.status(201).send({msg : "User Register  Successful " }))
                        .catch(error =>res.status(500).send(error))
                    }).catch(error => {
                        return res.status(500).send({
                            error: "Enable to hash password "
                        })
                    })
            }
        }).catch(error => {
            return res.status(500).send({ error })
        })



    } catch (error) {
        return res.status(500).send(error)
    }
}

/** POST : http://localhost:8000/api/login
 * @param:{
 "username": "example123",
 "password" : "admin123",
}
 */

export async function login(req, res) {
   const { username, password} =req.body;

   try {
    User.findOne({ username })
        .then( user =>{
            bcrypt.compare(password, user.password )
            .then( passwordCheck =>{
                if(!passwordCheck) return res.status(400).send({error: "Don't have Password"})

                // create jwt token
               const token =  jwt.sign({
                    userId: user._id,
                    username : user.username
                 }, "secret", {expiresIn: "24h"});
                 return res.status(200).send({
                    msg: "Login Successful ..... !",
                    username: user.username,
                    token
                 })
            } )
            .catch(error=>{
                return res.status(400).send({error:"Password does not match"})
            })

        })
        .catch( error =>{
            return res.status(404).send({error: "Username not found"})
        })
   
   } catch (error) {
    return res.status(500).send({error})
   }
}

export async function getUser(req, res) {
    res.json("getUser route")
} 
export async function updateUser(req, res) {
    res.json("updateUser route")
}

export async function generateOTP(req, res) {
    res.json("generateOTP route")
}

export async function verifyOTP(req, res) {
    res.json("verifyOTP route")
}

export async function createResetSession(req, res) {
    res.json(" createResetSession  route")
}

export async function resetPassword(req, res) {
    res.json("resetPassword route")
}