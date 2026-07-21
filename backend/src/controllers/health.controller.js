const HealthCheak = (req,res)=>{
    res.status(200).json({
        message:'server is healthy🫀',
        success:true
    })
}
export default HealthCheak