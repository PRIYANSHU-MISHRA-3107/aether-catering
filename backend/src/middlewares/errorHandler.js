const errorHandler = (err, req, res, next) => {
    console.error(err);

    let statusCode = 500;
    let message = "Internal Server Error";
    let errors = null;

    if(err.name === 'AppError'){
        statusCode = err.statusCode
        message = err.message
    }

    if (err.name === "ValidationError") {
        statusCode = 400;
        message = "Validation Failed";

    } else if (err.code === 11000) {
        statusCode = 409;
        const field = Object.keys(err.keyValue)[0];
        message = `${field} already exists.`;

    } else if (err.name === "CastError") {
        statusCode = 400;
        message = "Invalid Resource ID.";

    } else if (err.name === "ZodError") {
        statusCode = 400;
        message = "Validation Failed";
        errors = err.issues;
    }

    return res.status(statusCode).json({
        success: false,
        message,
        errors,
    });
};

export default errorHandler;