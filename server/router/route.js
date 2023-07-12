import {Router} from "express";


const router = Router()
import * as controller from "../controller/appController.js"
// POST
router.route(controller.register).post((req, res)=> res.json('register route')),
router.route("/registerMail").post() //send the mail
router.route("/authenticate").post((req, res)=> res.end( ))
router.route("/login ").post(controller.login)

// Get Method
router.route("/user/:username").get(controller.getUser)
router.route("/generateOTP").get(controller.generateOTP)
router.route("/verifyOTP").get(controller.verifyOTP)
router.route("/createResetSession").get(controller.createResetSession)

// PUT method
router.route('/updateuser').put(controller.updateUser)
router.route('/resetPassword').put(controller.resetPassword)

export default router;