'use strict';

const { json } = require('express');
const express =  require('express');
const app = express();
app.use(express.json());


const notFoundHandler = require('./errors-handler/404');
const errorHandler = require('./errors-handler/500');
const loggerMiddleWare = require('./middleware/logger');

const usersRoutes = require('./routes/users-routes');





app.get('/' , (req,res)=>{
    res.status(200).send("Every Thing Is Working Good :)")
})
app.get('/bad', (req, res, next) => {
    next('error from bad end point');
});

app.get('/status', (req, res) => {
    let statusOutput = {
        "domain": "siham-api-server.herokuapp.com",
        "status": "running",
        "PORT ": 3000,
    }
    res.status(200).json(statusOutput)
})

app.use(usersRoutes);
app.use(loggerMiddleWare);
app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => console.log(`Server is up on port ${port}`));
    }
}