import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const url = 'mongodb+srv://root:root@cluster0.tsbvx.mongodb.net/linktree_node_typescript'
        const { connection } = await mongoose.connect(url)
        const url2 = '${connection.host}:${connection.port}'

        console.log("MongoDB Conectado en ${url2}");
    }
    catch (err) {
        console.log(err.message);
        process.exit(1)
    }
}