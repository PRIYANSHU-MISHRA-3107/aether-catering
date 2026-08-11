import {
  createBookingServices,
  getAllBookingsService,
  getBookingByIdServices,
  updateBookingServices,
  updateBookingStatusService,
  deleteBookingServices,
  getBookingStatsService,
  getRecentBookingsService,
  getPendingBookingsService
} from "../services/booking.service.js";



export const createBooking = async (req, res, next) => {
    try {
      const booking = await createBookingServices(req.body);
  
      res.status(201).json({
        success: true,
        message: "Booking created successfully",
        data: booking,
      });
    } catch (error) {
      next(error);
    }
  };

  export const getAllBookings = async (req, res, next) => {
    try {
      const bookings = await getAllBookingsService();
  
      res.status(200).json({
        success: true,
        message: "Booking data fetched successfully",
        data: bookings,
      });
    } catch (error) {
      next(error);
    }
  };
  
export const getBookingById = async (req , res , next)=>{
    try{
        const {id} = req.params

        const booking = await getBookingByIdServices(id) 
        res.status(200).json({
            success:true,
            message:'Booking data fetch successfully',
            data:booking
        })
    }catch(error){
        next(error)
    }
}

export const updateBooking = async (req , res , next)=>{
    try{
        const {id} = req.params
        const updateData = req.body
        const booking = await updateBookingServices(id , updateData)

        res.status(200).json({
            success:true,
            message:'Booking update successfully',
            data:booking
        })
    }catch(error){
        next(error)
    }
}

export const deleteBooking = async (req , res , next)=>{
try{
    const {id} = req.params
        const booking = await deleteBookingServices(id)
        res.status(200).json({
            success:true,
            message:'Booking deleted successfully',
            data:booking
        })
    }catch(error){
        next(error)
    }
}


export const getBookingStats = async (req, res, next) => {
    try {
      const stats = await getBookingStatsService();
  
      res.status(200).json({
        success: true,
        message: "Booking statistics fetched successfully.",
        data: stats,
      });
    } catch (error) {
      next(error);
    }
  };

export const getrecentBooking = async (req, res, next) => {
    try{
        const stats = await getRecentBookingsService()

        res.status(200).json({
            success:true,
            message:'Recent bookings fetched successfully.',
            data:stats
        })
    }
    catch(error){
        next(error)
    }
}

export const getPendingBooking = async (req,res,next)=>{
    try{
    const stats = await   getPendingBookingsService()

    res.status(200).json({
        success:true,
        message:'Pending bookings fetched successfully.',
        data:stats
    })
}catch(error){
    next(error)
}
}

export const updateBookingStatus = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
  
      const booking = await updateBookingStatusService(id, status);
  
      res.status(200).json({
        success: true,
        message: "Booking status updated successfully.",
        data: booking,
      });
    } catch (error) {
      next(error);
    }
  };