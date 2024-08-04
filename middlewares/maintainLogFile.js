const express = require("express");
const fs = require("fs");

function maintainLogFile(fileName) {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `${Date.now()} : ${req.ip} : ${req.method} : ${req.path}\n`,
      (err, data) => {
        console.log("Hello from middleware 1");
        // console.log("error",err);
      }
    );
    req.user = "Shikha";
    next();
  };
}

module.exports = {
  maintainLogFile,
};
