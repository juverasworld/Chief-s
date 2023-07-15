import User from "../model/User.model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
// import ENV from "../config.js"
import ENV from "../config.js"
import UserModel from "../model/User.model.js";


// creating a middleware for user
export async function verifyUser(req, res, next) {
    try {
        const { username } = req.method == "GET" ? req.query : req.body;
        // checking the user existance
        let exist = await UserModel.findOne({ username });
        if (!exist) return res.status(404).send({ error: "Can't find user" })
        next()
    } catch (error) {
        return res.status(404).send({ error: "Authentication Error" })
    }
}
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
        const existUsername = User.findOne({ username });
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
                            .then(result => res.status(201).send({ msg: "User Register  Successful " }))
                            .catch(error => res.status(500).send(error))
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
    const { username, password } = req.body;

    try {
        User.findOne({ username })
            .then(user => {
                bcrypt.compare(password, user.password)
                    .then(passwordCheck => {
                        if (!passwordCheck) return res.status(400).send({ error: "Don't have Password" })

                        // create jwt token
                        const token = jwt.sign({
                            userId: user._id,
                            username: user.username
                        }, "ENV.JWT_SECRET", { expiresIn: "24h" });
                        return res.status(200).send({
                            msg: "Login Successful ..... !",
                            username: user.username,
                            token
                        })
                    })
                    .catch(error => {
                        return res.status(400).send({ error: "Password does not match" })
                    })

            })
            .catch(error => {
                return res.status(404).send({ error: "Username not found" })
            })

    } catch (error) {
        return res.status(500).send({ error })
    }
}

export async function getUser(req, res) {
    const { username } = req.params;
    try {
        if (!username) return res.status(501).send({ error: "Invalid Username" });
        UserModel.findOne({ username }, function (err, user) {
            if (err) return res.status(500).send({ err });
            if (!User) return res.status(501).send({ error: "Could'nt find the user" });
// removing password from user
            const { password, ...rest } = Object.assign({}, user.toJSON())
            return res.status(201).send(user)
        })
    } catch (error) {
        return res.status(404).send({ error: "cannot find user data" })
    }
}
export async function updateUser(req, res) {
    try {
        const id= req.query.id;
if(id){
const body = req.body;
// Updating data
UserModel.updateOne({_id:id}, body, function(err,data){
    if(err) throw err;

    return res.status(201).send({msg:"Record Updated...!"})
}) 
}else{return res.status(401).send({error:"User Not Found ...!"})}
    } catch (error) {
    return res.status(401).send({error})    
    }
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