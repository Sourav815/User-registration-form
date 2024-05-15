import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}`
    );
    console.log(
      `MongoDB Connection Successfull: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Error while connecting MongoDB: ${error}`);
    process.exit(1);
  }
};

export { connectDB };
