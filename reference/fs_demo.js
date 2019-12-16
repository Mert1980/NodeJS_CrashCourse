const fs = require("fs");
const path = require("path");

//Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => { //by default "fs.mkdir" is async
  if (err) throw err;
  console.log("Folder created...");
});