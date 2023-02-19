import mongoose from "mongoose"

const connectMongo = async () => {
    try {
        mongoose.set("strictQuery", false);
        const { connection } = await mongoose.connect(process.env.MONGO_URL)

        if (connection.readyState == 1) {
            console.log("Database Connected")
        }
    } catch (errors) {
        return Promise.reject(errors)
    }
}

export default connectMongo