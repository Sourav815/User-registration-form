import { Router } from "express";
import upload from "../middleware/multer.middleware.js";
import { patientRegistration } from "../controller/patient.controller.js";

const router = Router();

router.route("/registration").post( upload.single("photo"), patientRegistration);

export default router;
