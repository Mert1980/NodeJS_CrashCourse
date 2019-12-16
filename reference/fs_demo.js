const fs = require("fs");
const path = require("path");

//Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, err => {
  //by default "fs.mkdir" is async
  if (err) throw err;
  console.log("Folder created...");
});

//Create and write to a file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  err => {
    if (err) throw err;
    console.log("File written to...");
  }
);
