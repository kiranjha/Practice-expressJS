const path = require('path');
const express = require('express');
const app = express();


const staticPath = path.join(__dirname,"../public");
//buit in middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("Hello Worldfrom the express");
});
app.get("/about", (req, res) => {
    res.send("hello world from the about page");
});
app.listen(3000, () => {
    console.log("Listing the port at 3000");
});




// "/" means route
//callback, we pass two parameters that is request and response

/* API
create  -   post
read    -   get
update  -   put
delete  -   delete
*/