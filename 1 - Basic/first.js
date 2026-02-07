const fs = require('fs')


fs.writeFile("output.txt", "Hello World", (err) => {
    if (err) console.log("Error occured", err);
    else console.log("File created successfully");
})
