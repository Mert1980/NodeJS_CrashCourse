const url = require("url");

const myURL = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized URL
console.log(myURL.href);
console.log(myURL.toString());
// returns ==> http://mywebsite.com/hello.html?id=100&status=active

// Host (root domain) // this also returns port number if written in the URL
console.log(myURL.host); // returns ==> mywebsite.com

// Hostname (does not get port)
console.log(myURL.hostname);// returns ==> mywebsite.com

// Pathname
console.log(myURL.pathname); // returns ==> /hello.html

// Serialized Query
console.log(myURL.search); // returns ==> ?id=100&status=active

// Params object
console.log(myURL.searchParams); // returns ==> URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add params
myURL.searchParams.append('abc','123')
console.log(myURL.searchParams);

// Loop through params
myURL.searchParams.forEach((value, name)=>{
    console.log(`${name}:${value}`)
})