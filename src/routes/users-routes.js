const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/users', async (req, res) => {
    try{

        const users = await User.find({ email: "anderson@gmail.com"});
        console.log(users);

    }catch(err) {
        console.log('Erro');
    }

    res.json({
        ok: 'ok'
    });
});

usersRouter.post('/users', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.create({
        email: email,
        password: password
    });
    
    res.json({
        ok: 'ok'
    });
});

module.exports = usersRouter;