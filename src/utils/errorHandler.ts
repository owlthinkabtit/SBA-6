export class AppError extends Error {
  constructor(public message: string, public statusCode?: number) {
    super(message);
    this.name = "AppError";
  }
}

export function handleError(error: unknown) {
  if (error instanceof AppError) {
    console.log(`[App Error]: ${error.message}`);
  } else {
    console.log("[System Error]: An unexpected error occurred.");
  }
}