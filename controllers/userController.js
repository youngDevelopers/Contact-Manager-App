import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../models/User";
import jwt from "jsonwebtoken";

//private endpoint
export const getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  console.log(req.user);
  return res.status(200).json(users);
});

//public endpoint
export const registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  //Querry database to search if already exist
  const userAlreadyExist = await User.findOne({ email });
  //console.log(userAlreadyExist);
  if (userAlreadyExist) {
    res.status(400);
    throw new Error("User Already Exist/ Registered");
  }
  
  //Hashing Password
  const hashedPassword = await bcrypt.hash(password, 10);
  //console.log(hashedPassword);

  //Create User
  const created_user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  //check if the user is created and return response
  if (created_user) {
    //res.status(200).json({ _id: created_user.id, email: created_user.email });
    return res.status(200).json(created_user);
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//piblic endpoint
export const loginUser = asyncHandler( async (req, res, next) => {
    //Destructure email and password in req
    const {email, password} = req.body;

    //validate the req
    if(!email || !password) {
        res.status(400);
        throw new Error("All fields are required/ mandatory");
    };

    //find user in database with inputted credentials
    const user = await User.findOne({ email });
    //console.log(user);

    //compare password from request and database password of user
    const comparePassword = await bcrypt.compare(password, user.password)
    //console.log(comparePassword);

    //check if the querrried user exist and password matches
    if(user && comparePassword){
        //generating user access token after being validated to login in
        const accessToken = jwt.sign(
          {
            user: {
              username: user.username,
              email: user.email,
              id: user.id,
            },
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "10m" }
        );
        res.status(200).json({ accessToken});
    } else {
        res.status(401);
        throw new Error("email or password not valid");
    }
});

//private endpoint
export const getCurrentUser = asyncHandler(async (req, res, next) => {
  console.log(req.user);
  return res.status(200).json(req.user);
});
