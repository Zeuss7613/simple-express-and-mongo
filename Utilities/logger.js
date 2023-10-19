import winston from "winston";

export const logger = new winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: "log/example-error.log",
      level: "error",
    }),
    new winston.transports.Console({
        level: "info"
    }),
  ],
});
