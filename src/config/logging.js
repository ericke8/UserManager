const log4js = require("log4js");

const DEFAULT_LOG_LEVEL =
  process.env.LOG_LEVEL || process.env.NODE_ENV == "test" ? "error" : "info";

module.exports = {
  configureLogging() {
    log4js.configure({
      appenders: { out: { type: "stdout" } },
      categories: {
        default: { appenders: ["out"], level: DEFAULT_LOG_LEVEL }
      }
    });
  }
};