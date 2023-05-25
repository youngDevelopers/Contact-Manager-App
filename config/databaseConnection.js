import mongoose from 'mongoose';
import {} from "dotenv/config";

export const dbConnect = async () => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/dbname');
        console.log(
            "Database Connected",
            connect.connection.host,
            connect.connection.name
        )
    } catch (error) {
        console.log(error),
        process.exit(1)
    }
}

const database_Url = `mongodb://127.0.0.1:27017/Contacts-Backend`;
const PROD_DB = process.env.DATABASE_URL;

export const connectDB = () => {
  mongoose.connect(database_Url, {});
//   mongoose.connection.once('open', (err) => {
//       if (err) {
//           console.log(err)
//       } else {
//          console.log(`Database Connected Successfully`)
//       }
//   })
  mongoose.connection.on("connected", () => {
    console.log("Mongo has connected succesfully");
  });
  mongoose.connection.on("reconnected", () => {
    console.log("Mongo has reconnected");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Mongo connection has an error", error);
    mongoose.disconnect();
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Mongo connection is disconnected");
  });
};
