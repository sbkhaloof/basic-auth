'use strict';

const { User } = require('../models/index');
const base64 = require('base-64');
const bcrypt = require('bcrypt')

// For creating a new user ( SignUp )

async function create(req, res) {
    let UserInfo = req.headers.authorization;
    let basicHeaderParts = UserInfo.split(' ');  // ['Basic', 'aGVtYToxMjM0']
    let encodedString = basicHeaderParts.pop();  //aGVtYToxMjM0
    let decodedString = base64.decode(encodedString); // "username:password"
    let [userName, userPassword] = decodedString.split(':'); // username, password
  
    try {
        
        let hashedPassword = await bcrypt.hash(userPassword, 10);
      
        const userRecord = await User.create(
            {
                userName: userName,
                userPassword: hashedPassword
            }
            );
            res.status(200).json(userRecord );
        } catch (e) { res.status(403).send("Error In Creating User"); }  
    }
///////////////////////////////////////////////////////////

// For getting user informations( Signin )

    async function getOne(req, res) {
        let UserInfo = req.headers.authorization;
        let basicHeaderParts = UserInfo.split(' ');  // ['Basic', 'aGVtYToxMjM0']
        let encodedString = basicHeaderParts.pop();  //aGVtYToxMjM0
        let decodedString = base64.decode(encodedString); // "username:password"
        let [userName, userPassword] = decodedString.split(':'); // username, password
    
        try {
            let userRecord  = await User.getOne(userName);
          
            const valid = await bcrypt.compare(userPassword, userRecord.userPassword);
            if (valid) {
              res.status(200).json(userRecord);
            }
            else {
              throw new Error('Invalid User Password')
            }
    } catch (error) { res.status(403).send("Invalid User Name"); }
    }

    
    async function getAll(req, res) {
        let Users = await User.getAll();
        res.status(200).json(Users);
    }



async function update(req, res) {
    let id = parseInt(req.params.id);
    let UserInfo = req.body;

    let User = await User.update(UserInfo, id);
    res.status(200).json(User);
}

async function deleteOne(req, res) {
    let id = parseInt(req.params.id);

    await User.deletei(id);
}



module.exports = {
    getAll,
    create,
    getOne,
    update,
    deleteOne
}