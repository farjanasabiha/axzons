import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  serviceType: String,
  message: String,
});

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);