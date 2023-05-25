import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,//id created in the mongodb
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please Enter Name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
    },
    phone: {
      type: String,
      required: [true, "Please Enter Phone Number"],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Contact", contactSchema);
