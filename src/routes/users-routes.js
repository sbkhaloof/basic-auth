'use strict';
const express = require('express');
const router = express.Router();

const 
{
    getAll,
    create,
    getOne,
    update,
    deleteOne
} = require('../routes-implementations/users.route-implementations');


router.get('/users', getAll);
router.post('/signup', create);
router.get('/signin', getOne);
router.put('/updateuser', update);
router.delete('/deleteuser', deleteOne);

module.exports = router;