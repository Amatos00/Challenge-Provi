const usersRouter = require('express').Router();

usersRouter.get('/users', (req, res) => {
    res.send('Outro OK!')
});

usersRouter.post('/users', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    
    
    res.json({
        ok: 'ok'
    });
});

module.exports = usersRouter;