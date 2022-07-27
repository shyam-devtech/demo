const express = require('express');
const bodyParser = require('body-parser');
const user = require('./router/user')
const initiateMongoServer = require("./config/db")
const cors = require('cors');

initiateMongoServer();

const app = express();

app.use(cors());

const PORT = 4000;

// middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: "API working successfully!!" });
});

// Routes
app.use('/user', user)

app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT ${PORT}`);
});