const userRouter = require('express').Router();

router.get('/', (req, res) => {
    res.send('OK!')
});


router.get('/users', (req, res) => {
    res.send('Outro OK!')
});


module.exports = userRouter;