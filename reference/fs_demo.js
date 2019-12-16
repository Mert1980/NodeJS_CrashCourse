const fs = require("fs");
const path = require("path");

//Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   //by default "fs.mkdir" is async
//   if (err) throw err;
//   console.log("Folder created...");
// });

//Create and write to a file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   err => {
//     if (err) throw err;
//     console.log("File written to...");

//     // Append a file
//     fs.appendFile( // this is a callback function
//       path.join(__dirname, "/test", "hello.txt"),
//       " I love Node JS",
//       err => {
//         if (err) throw err;
//         console.log("File written to...");
//       }
//     );
//   }
// );

// Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename file
fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "helloWorld.txt"), err => {
    if (err) throw err;
    console.log("File renamed...");
  });