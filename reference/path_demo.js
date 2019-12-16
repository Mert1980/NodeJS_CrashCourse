const path = require('path');

//Base file name
console.log(__filename); 
    // returns ==> /home/hackyourfuture/Documents/Mert/NODE.JS_Study/reference/path-demo.js
console.log(path.basename(__filename)); // returns ==> path-demo.js

//Directory name
console.log(path.dirname(__filename));
    // returns ==> /home/hackyourfuture/Documents/Mert/NODE.JS_Study/reference

//File Extension
console.log(path.extname(__filename)); // returns ==> .js

//Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).name) // returns ==> path-demo

//Concatenate paths
console.log(path.join(__filename, 'test', 'hello.html'));
// returns ==> /home/hackyourfuture/Documents/Mert/NODE.JS_Study/reference/path-demo.js/test/hello.html