import mongoose from 'mongoose';
import colors from 'colors';
import User, { IUser } from '../models/User';

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.bgGreen.white.bold(`MongoDB Conectado en ${url}`));
    } catch (err) {
        console.log(colors.bgRed.white.bold(err.message));
        process.exit(1)
    }
}