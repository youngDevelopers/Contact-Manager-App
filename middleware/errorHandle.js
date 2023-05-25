import { errors } from "../errors";

export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode: 500;

    switch (statusCode) {
      case errors.VALIDATION_ERROR:
        res.json({
          title: "Not Found",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
      case errors.FORBIDDEN:
        res.json({
          title: "FORBIDDEN",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
      case errors.UNAUTHORIZED:
        res.json({
          title: "UNAUTHORIZED",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
      case errors.NOT_FOUND:
        res.json({
          title: "NOT FOUND",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
      case errors.SERVER_ERROR:
        res.json({
          title: "SERVER ERROR",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
      default:
          console.log("No Error, All good !!")
        break;
    }
};