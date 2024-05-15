import { Router } from "express";
import upload from "../middleware/multer.middleware.js";
import {
  patientRegistration,
  getPatient,
} from "../controller/patient.controller.js";

const router = Router();

// Patient Route
router.route("/registration").post(upload.single("photo"), patientRegistration);
router.route("/getPatient").get(getPatient);


// Doctor's Route

export default router;
