import mongoose from "mongoose"

const connectDB = async () => {
    console.log(process.env.MONGODB_URL)
    mongoose.connection.on('connected',()=>{
        console.log('DB Connected')
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/ecommerce`)
}

export default connectDB;