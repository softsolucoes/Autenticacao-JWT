const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
    const token = req.header('authoriztion-token');
    if(!token){
        return res.status(401).send('acesso negado');
    }

    try {
        const userVeried = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = userVeried;
        next();
        
    } catch (error) {
        return res.status(401).send('acesso negado');
        
    }

}