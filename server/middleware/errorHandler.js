const ErrorHandler = function(err, req, res, next){
    console.error(`Error: ${err.message}`);

    const errorResponse = {
        'message' : err.message
    };

    res.status(400).json(errorResponse);
};

module.exports = ErrorHandler;