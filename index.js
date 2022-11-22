const express = require('express')

const app = express();
const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.send({"ping": "pong"})
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));