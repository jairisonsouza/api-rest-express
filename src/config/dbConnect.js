import mongoose from "mongoose";

async function conectaNaDatabase () {
    mongoose.connect("mongodb+srv://jairison:5Q6WyIVjMxjuYCry@cluster0.cexsprt.mongodb.net/livraria?retryWrites=true&w=majority");
    return mongoose.connection;
};

export default conectaNaDatabase;