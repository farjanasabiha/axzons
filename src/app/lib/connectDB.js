import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    // If already connected, return
    console.log("Already connected to the database");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default connectDB;