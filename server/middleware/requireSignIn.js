const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authorization = req.headers;
    if (!authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token === "null") {
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'secretKey');
    if (!payload) {
        return res.status(401).send('Unauthorized request');  
    }
    req.userId = payload.subject;
    next();
};

