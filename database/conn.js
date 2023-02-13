import mongoose from "mongoose"
const MONGO_URL = "mongodb+srv://nextjscrudapp:nextjscrudapp@nextjscrudapp.4wrjzob.mongodb.net/?retryWrites=true&w=majority"

const connectMongo = async () => {
    try {
        const { connection } = await mongoose.connect(MONGO_URL)

        if (connection.readyState == 1) {
            console.log("Database Connected")
        }
    } catch (errors) {
        return Promise.reject(errors)
    }
}

export default connectMongo