import express from "express";
import UserController from "../controllers/userController.js";
import userAuthorization from "../utils/middlewares/authMiddleware.js";
const router = express.Router();


router.post("/register", UserController.userRegister);
router.post("/login", UserController.userLogin);
router.put("/update", userAuthorization, UserController.changePassword);
router.post("/forget-password", UserController.forgetPassword);
router.delete("/delete-account", UserController.deleteAccount);


export default router;
