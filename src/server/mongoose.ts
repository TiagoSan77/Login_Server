import mongoose from "mongoose";

const databaseUri = 'mongodb+srv://tiagosantinidasilva:CfsPnAPWTRlW6PLg@cluster0.51trz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export function connect() {
  return mongoose.connect(databaseUri)
    .then(() => { console.log('Conectado ao mongoose') })
    .catch((err) => { console.log(err) });
};
