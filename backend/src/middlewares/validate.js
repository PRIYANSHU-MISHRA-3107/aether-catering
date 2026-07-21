const validate = (Schema)=>{

    return(req,res,next)=>{
        try{
            req.body = Schema.parse(req.body)
            next()
        }
        catch(error){
            return res.status(400).json({
                success:false,
                message:'validation failed',
                error:error.issues
            })
        }
    }
}
export default validate