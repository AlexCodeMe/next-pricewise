import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (!process.env.MONGODB_URI) return console.log('MONGODB_URI not defined')
    if (isConnected) console.log('=> using existing db connection')

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        isConnected = true
        console.log('MongoDB Connected')
    } catch (error) {
        console.log(error)
    }
}