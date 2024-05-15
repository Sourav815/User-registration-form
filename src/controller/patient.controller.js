import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { patient } from "../model/patient.model.js";
import { uploadOnCloudinary } from "../utils/cloudinarySetUp.js";
const patientRegistration = asyncHandler(async (req, res) => {
  const {
    name,
    dob,
    sex,
    height,
    weight,
    maritalStatus,
    contactNumber,
    address,
    city,
    state,
    pin,
    medication,
    email,
    medicalHistory,
    emergencyContactName,
    chiefComplaint,
    relationship,
    contact,
  } = req.body;


  if (
    !name ||
    !dob ||
    !sex ||
    !height ||
    !weight ||
    !maritalStatus ||
    !contactNumber ||
    !address ||
    !city ||
    !state ||
    !pin ||
    !email ||
    !emergencyContactName ||
    !chiefComplaint ||
    !relationship ||
    !contact
  ) {
    throw new apiError(
      400,
      "All records are required excepts Medical History & Medication"
    );
  }

  const localPhotoPath = req.file?.path;

  const photoURL = await uploadOnCloudinary(localPhotoPath);

  const createUser = await patient.create({
    name,
    dob,
    sex,
    height,
    weight,
    photo: photoURL.url,
    maritalStatus,
    contactNumber,
    address,
    city,
    state,
    pin,
    medication,
    email,
    medicalHistory,
    emergencyContactName,
    chiefComplaint,
    relationship,
    contact,
  });

  if (!createUser) {
    throw new apiError(
      400,
      "Something went wrong while creating patient in DB"
    );
  }
  
  return res
    .status(200)
    .json(new apiResponse(201, "Patient Registration Successfull", createUser));
});

export { patientRegistration };
