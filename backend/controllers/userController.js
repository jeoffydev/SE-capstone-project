"use strict";

const { Model } = require("mongoose");
let Models = require("../models"); //matches index.js

const getUsers = (res) => {
    //finds all users
    Models.User.find({}, {}, {}, (err, data) => {
    if (err) throw err;
    res.send({result: 200, data: data})
    });
}
const createUser = (data, res) => {
    Models.User.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err => {
        throw err
    })
} 

module.exports = {
    getUsers, createUser 
}