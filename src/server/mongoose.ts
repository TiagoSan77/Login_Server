import mongoose from "mongoose";
import {DATABASE_URI} from "../config"

export function connect() {
  return mongoose.connect(DATABASE_URI)
    .then(() => { console.log('Conectado ao mongoose') })
    .catch((err) => { console.log(err) });
};
