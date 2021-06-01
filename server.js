const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/static`));

app.use((request, response) => {
    response.sendFile(path.resolve(`${__dirname}/static/index.html`));
 });

app.listen(PORT, function() {
    console.log(`Example app listening on port ${PORT}!`);
});