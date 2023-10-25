import winston, { transports } from "winston";
import config from "./config.js";
// export const logger = winston.createLogger({
//   transports: [
//     new winston.transports.Console({
//       level: "silly",
//       format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.simple()
//       ),
//     }),
//     new winston.transports.File({
//       filename: "./logs-file.log",
//       level: "info",
//       format: winston.format.combine(
//         winston.format.timestamp(),
//         winston.format.prettyPrint()
//       ),
//     }),
//   ],
// });

const customLevels = {
  levels: {
    fatal: 0,
    warning: 1,
    information: 2,
    debug: 3,
  },
  colors: {
    fatal: "red",
    warning: "yellow",
    information: "blue",
    debug: "green",
  },
};

// export const logger = winston.createLogger({
//   levels: customLevels.levels,
//   transports: [
//     new winston.transports.Console({
//       level: "debug",
//       format: winston.format.combine(
//         winston.format.colorize({ colors: customLevels.colors }),
//         winston.format.simple()
//       ),
//     }),
//     new winston.transports.File({
//       filename: "./errors.log",
//       level: "warning",
//       format: winston.format.combine(
//         winston.format.colorize({ colors: customLevels.colors })
//       ),
//     }),
//   ],
// });
export let logger;

if (config.environment === "STAGE") {
  logger = winston.createLogger({
    levels: customLevels.levels,
    transports: [
      new winston.transports.File({
        filename: "./stageLogs.log",
        level: "warning",
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.prettyPrint()
        ),
      }),
    ],
  });
} else {
  logger = winston.createLogger({
    levels: customLevels.levels,
    transports: [
      new winston.transports.Console({
        level: "debug",
        format: winston.format.combine(
          winston.format.colorize({ colors: customLevels.colors }),
          winston.format.simple()
        ),
      }),
    ],
  });
}
