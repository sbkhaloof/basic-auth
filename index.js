'use strict';

const server = require('./src/server');
require('dotenv').config();

const { db } = require('./src/models/index');


db.sync()
    .then(() => {
        server.start(process.env.PORT);
    })
    .catch(console.error)