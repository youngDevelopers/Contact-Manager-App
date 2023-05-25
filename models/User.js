import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please add your username"],
    },
    email: {
        type: String,
        required: [true, "Please Enter user email adress"],
        unique: [true, "Email adress already taken"],
    },
    password: {
        type: String,
        required: [true, "Please Enter the user password"]
    },
},
{
    timestamps: true,
})

export default mongoose.model("User", userSchema);