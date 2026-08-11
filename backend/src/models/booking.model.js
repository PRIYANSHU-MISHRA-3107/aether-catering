import mongoose, { model } from "mongoose"

const bookingSchema = new mongoose.Schema(
{
    customerName:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    phoneNumber:{
     type:String,
     trim:true,
     required:true
    },
    eventType:{
        type:String,
        required:true
    },
    eventDate:{
        type:Date,
        required:true
    },
    timeSlot:{
        type:String,
        required:true
    },
    guestCount:{
        type:Number,
        required:true
    },
    venue: {
        type: String,
        trim: true,
        required: true,
    },
    dietaryPreference:{
        type:String,
        required:true
    },
    packageId: {
        type: String,
        required: true,
      },
      mainCourseDishes: {
        type: [String],
        default: [],
      },
      
      dessertDishes: {
        type: [String],
        default: [],
      },
      
      beverageDishes: {
        type: [String],
        default: [],
      },
      
      extras: {
        type: [String],
        default: [],
      },
      specialInstructions: {
        type: String,
        trim: true,
        default: "",
      },
      status: {
        type: String,
        enum: ["Pending", "Confirmed", "Cancelled", "Completed"],
        default: "Pending",
      },


},{
    timestamps:true
})

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;