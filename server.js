const express = require('express');

const app = express();
port = 5505

app.use(express.static('public'));
app.use('/public', express.static('public'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname+"/"+"index.html");
})

app.listen (port, () => console.log(`i am running on port ${port}`))