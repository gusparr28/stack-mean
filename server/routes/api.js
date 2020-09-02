const { Router } = require('express');
const router = Router();

const requireSignIn = require('../middleware/requireSignIn');

const { getApi, signUpUser, signInUser, Events, specialEvents } = require('../controllers/apiController');

router.route('/api')
    .get(getApi);

router.route('/signup')
    .post(signUpUser);

router.route('/signin')
    .post(signInUser);

router.route('/events')
    .get(Events);

router.route('/special-events')
    .get(requireSignIn, specialEvents);

module.exports = router;
