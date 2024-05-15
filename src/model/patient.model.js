import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    dob: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    maritalStatus: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pin: {
      type: String,
      required: true,
    },
    medication: {
      type: Boolean,
    },
    medicalHistory: {
      type: String,
    },
    emergencyContactName: {
      type: String,
      required: true,
      trim: true,
    },
    chiefComplaint: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      required: true,
      trim: true,
    },
    contact: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const patient = mongoose.model("patient", patientSchema);
export { patient };
