const express = require("express");
const path = require("path");

const app = express();

/* Ensure any requests prefixed with /static will serve our "frontend/static" directory */
app.use("/static", express.static( "static"));

/* Redirect all routes to our (soon to exist) "index.html" file */
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"));
});

app.listen(process.env.PORT || 8080, () => console.log("시작해보재이~!"));