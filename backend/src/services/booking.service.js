import Booking from "../models/booking.model.js"
import AppError from "../utils/AppError.js"

// 1
export const createBookingServices = async (bookingData)=>{
  // Past date check
  const today = new Date();
  const eventDate = new Date(bookingData.eventDate);
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  if (eventDate < today) {
    throw new AppError("Event date cannot be in the past.", 400);
  }
  // Prevent double booking------------------------------
  const existingBooking = await Booking.findOne({
    eventDate: bookingData.eventDate,
    timeSlot: bookingData.timeSlot,
  });
  if (existingBooking) {
    throw new AppError(
      "This date and time slot is already booked. Please choose another slot.",
      409
    );
  }
  // Minimum Guest Count----------------------------------------------
  if (bookingData.guestCount < 10) {
    throw new AppError("Minimum 10 guests are required.", 400);
  }


  const validPackages = ['silver', 'gold']
  if(!validPackages.includes(bookingData.packageId)){
    throw new AppError("Invalid package selected.", 400);
  }

  bookingData.status = "Pending";

      const booking = await Booking.create(bookingData)
      return booking
}
// 2
export const getAllBookingsService = async () => {
    const bookings = await Booking.find();
    return bookings;
  };
  // 3
export const getBookingByIdServices = async (id) => {
    const booking = await Booking.findById(id);
    if (!booking) {
        throw new AppError("Booking not found", 404);
      }
    return booking;
  };
  // 4
export const updateBookingServices = async (id, bookingData) => {
    const booking = await Booking.findByIdAndUpdate(id, bookingData, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!booking) {
        throw new AppError("Booking not found", 404);
      }
    return booking;
  };
  // 5
export const deleteBookingServices = async (id) => {
    const booking = await Booking.findByIdAndDelete(id);
    if (!booking) {
        throw new AppError("Booking not found", 404);
      }
    return booking;
  };


// Admin Dashboard Services

export const getBookingStatsService = async () => {

  const totalBookings = await Booking.countDocuments();

  const pendingBookings = await Booking.countDocuments({
    status: "Pending",
  });

  const confirmedBookings = await Booking.countDocuments({
    status: "Confirmed",
  });
  
  const cancelledBookings = await Booking.countDocuments({
    status: "Cancelled",
  });
  
  const completedBookings = await Booking.countDocuments({
    status: "Completed",
  });
  return{
    totalBookings,
    pendingBookings,
    confirmedBookings,
    cancelledBookings,
    completedBookings,
  }
  }

export const getRecentBookingsService = async () => {

    const recentBookings = await Booking.find()
    .sort({createdAt:-1})
    .limit(5)

    return recentBookings;
  }

export const getPendingBookingsService = async () => {
    const pending = await Booking.find({ status: "Pending" });
    return pending;
  };

  export const updateBookingStatusService = async (id, status) => {
    const validStatus = ["Pending", "Confirmed", "Cancelled", "Completed"];
  
    if (!validStatus.includes(status)) {
      throw new AppError("Invalid booking status.", 400);
    }
  
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
  
    return booking;
  };