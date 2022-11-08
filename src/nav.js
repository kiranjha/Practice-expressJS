const express = require('express');
const app = express();
const port = 3000;
/*welcome to my home page
/about - 
/contact - 
/temp -
*/

app.get("/", (req, res) => {
    res.write("<h1>Welcome to my Home Page.<h1>");
    res.write("<h1>Welcome to my Again Home Page.<h1>");
    res.send(); 
});

app.get("/about", (req, res) => {
    res.send("Welcome to my About Page");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to my Contact Page");
});

// app.get("/temp", (req, res) => {
//     res.send([{
//         id: 1,
//         name: "Kiran"
//     },
//     {
//         id: 2,
//         name: "Arun"
//     },
//     {
//         id: 3,
//         name: "Yash"
//     },
//     {
//         id: 4,
//         name: "Sourav"
//     }] );
// });

app.get("/temp", (req, res) => {
    res.json([{
        id: 1,
        name: "Kiran"
    },
    {
        id: 2,
        name: "Arun"
    },
    {
        id: 3,
        name: "Yash"
    },
    {
        id: 4,
        name: "Sourav"
    }] );
});
//res.json and res.send methods are identical when an object or array is passed,
//but res.json() will also convert non-objects,
//such as null and undefined , which are not valid json.
app.listen(port, () => {
    console.log(`Listening to the Port number ${port}`);
});