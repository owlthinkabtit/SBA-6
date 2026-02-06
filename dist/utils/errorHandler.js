export class AppError extends Error {
    message;
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.name = "AppError";
    }
}
export function handleError(error) {
    if (error instanceof AppError) {
        console.log(`[App Error]: ${error.message}`);
    }
    else {
        console.log("[System Error]: An unexpected error occurred.");
    }
}
