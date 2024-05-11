const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/reset/:email', userController.reset);
router.get('/password/:token', userController.passwordToken);
router.post('/password', userController.password);
router.post('/activateRates', authMiddleware, userController.activateRates)
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);

module.exports = router
