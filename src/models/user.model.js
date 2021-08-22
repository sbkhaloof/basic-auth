'use strict';

const { sequelize, DataTypes } = require('sequelize');

const Users = (sequelize , DataTypes) => sequelize.define('Users' , {
    userName : {
        type : DataTypes.STRING,
        allowNull : false
    },

    userPassword : {
        type : DataTypes.STRING,
        allowNull : false
    }
})

module.exports = Users;