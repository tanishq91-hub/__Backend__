const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("First Dummy Middleware", req.url, req.method);
    next();
});

app.use((req, res, next) => {
    console.log("Second Dummy Middleware", req.url, req.method);
    next();
});

// app.use((req, res, next) => {
//     console.log("Third Dummy Middleware", req.url, req.method);
//     res.send("<h1>Welcome to express practice set</h1>");
// });

app.get("/", (req, res, next) => {
    console.log("Handling / for GET", req.url, req.method);
    res.send(`<h1>Welcome to express practice set</h1>`);
});

app.get("/contact-us", (req, res, next) => {
    console.log("Handling /contact-usfor GET", req.url, req.method);
    res.send(
        `<h1>Please Give your details:</h1>
        <form action="/contact-us" method="POST">
        <input type="text" name="username" placeholder="Enter your Username"/><br/>
        <input type="email" name="email" placeholder="Enter your Email"/><br/>
        <input type="submit" value="Submit"/>
        </form>
        `);
});

app.post("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for POST", req.url, req.method);
    res.send("<h1>Thanks for contacting us!</h1>")
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});
