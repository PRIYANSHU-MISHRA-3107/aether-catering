import mongoose from 'mongoose'

const connectDB= async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`database connected successfully ${connection.connection.host}`)
    }catch(error){
     
        console.error('database connection failed')
        console.error(error.message)
        process.exit(1)
    }
}
export default connectDB