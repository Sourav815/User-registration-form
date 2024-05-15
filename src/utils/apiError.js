class apiError extends Error {
  constructor(statusCode, message, errors = [], stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
    this.errors = errors;
    this.message = message;
    this.stack = stack;
  }
}

export default apiError;
