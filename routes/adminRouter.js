const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController')

router.get('/', auth, (req, res) => {

    if(req.user.admin){
        res.send('So admins devem ver isso')
    }else{
        return res.status(401).send('not admin: acesso negado');

    }
    
})

router.get('/free', auth, (req, res) => {
    res.send('Esse dado só deve ser visto por quem está logado');

})

module.exports = router;