const jwt = require('jsonwebtoken');

const apiController = {};

const User = require('../models/User');

apiController.getApi = (req, res) => {
    res.send('From API route');
};

apiController.signUpUser = (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, signedUpUser) => {
        if (error) {
            console.log(error);
        } else {
            let payload = { subject: signedUpUser.id };
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({ token });
        };
    });
};

apiController.signInUser = (req, res) => {
    let userData = req.body;
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('Invalid email');
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid password');
                } else {
                    let payload = { subject: user._id };
                    let token = jwt.sign(payload, 'secretKey');
                    res.status(200).send({ token });
                };
            };
        };
    });
};

apiController.Events = (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": new Date()
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": new Date()
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": new Date()
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": new Date()
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": new Date()
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": new Date()
        }
    ];
    res.json(events);
};

apiController.specialEvents = (req, res) => {
    let specialEvents = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": new Date()
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": new Date()
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": new Date()
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": new Date()
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": new Date()
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": new Date()
        }
    ];
    res.json(specialEvents);
};

module.exports = apiController;