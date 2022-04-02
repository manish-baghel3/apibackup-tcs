const envs = {
  SERVER_TOKEN_SECRET: "3SSMSD1954",
  NODE_ENV: "develop",
  PORT: 3301,
  db_url:
    "mongodb+srv://TCSADMIN:TCSADMIN@cluster0.eq2vx.mongodb.net/TaniaClayServicesDB?retryWrites=true&w=majority",
};
export class Configuration {
  public static init() {
    //Read configuration file
    // let configFile = null;
    // let deployConfig = null;
    // process.argv.forEach(function (val, index, array) {
    //   let arr = val.split(":");
    //   if (arr.length > 0 && arr[0] == "config") {
    //     configFile = arr[1];
    //   }
    // });

    // if (configFile == null) {
      console.info(
        "Starting Application, Please Wait..."
      );
      // require('dotenv').config();
    // } else {
    //   console.info("Reading configuration from", configFile);
    //   require("dotenv").config({ path: configFile });
    // }
  }

  //Get configuration value method
  public static get(key: string) {
    if (!envs[key]) {
      throw new Error("Missing configuration key " + key);
    } else {
      return envs[key];
    }
  }

  //Get configuration value method
  public static set(key, value) {
    process.env[key] = value;
  }

  //Check configuration key exists
  public static has(key) {
    if (process.env.hasOwnProperty(key)) {
      return true;
    } else {
      return false;
    }
  }

  // public static logger(logFile: string) {
  //     const winston = require('winston');
  //     // Logger configuration with tranporting log in local
  //     const logConfiguration = {
  //         'transports': [
  //             logFile ? new winston.transports.File({
  //             filename: './logs/' + logFile
  //             }) : new winston.transports.Console()
  //         ]
  //     };
  //     // Creating logger
  //     const logger = winston.createLogger(logConfiguration);
  //     return logger
  // }

  public static getFileSize(sizeType: string, filePath: string) {
    var fs = require("fs"); // Load the filesystem module
    var stats = fs.statSync(filePath);
    var fileSizeInBytes = stats.size;
    // Convert the file size to megabytes (optional)
    if (sizeType === "mb") {
      return fileSizeInBytes / (1024 * 1024);
    } else {
      return fileSizeInBytes;
    }
  }

  public static isFileExists(filePath: string) {
    var fs = require("fs"); // Load the filesystem module
    if (fs.existsSync(filePath)) {
      return true;
    }
  }

  public static deleteFile(filePath: string) {
    var fs = require("fs"); // Load the filesystem module
    fs.unlinkSync(filePath); // Removing the File
  }

  public static blankFile(filePath: string) {
    var fs = require("fs"); // Load the filesystem module
    fs.writeFileSync(filePath, ""); // Blanking the File
  }

  public static getQueryParams(reqUrl) {
    var url = require("url");
    return url.parse(reqUrl, true).query;
  }

  public static getBaseUrl(envType: string) {
    const devAPIUrl = "http://localhost:3300";
    if (envType === "develop") {
      return "*";
      // } else if(envType === 'test') {
      //     return testUrl
      // } else {
      //     return mainUrl
    }
  }
}
