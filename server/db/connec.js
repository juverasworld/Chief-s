import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
// import ENV from "../config.js"
require('dotenv').config();
async function connect() {
  const mongod = await MongoMemoryServer.create();
  const getUri = mongod.getUri();

  mongoose.set("strictQuery", true);
  // const db = await mongoose.connect(getUri); // corrected typo: connnect to connect
  const db = await mongoose.connect(process.env.ATLAS_URI)
  console.log("Database Connected");
  return db;
}

export default connect;
