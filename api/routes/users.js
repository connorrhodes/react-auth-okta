const express = require('express');
const router = express.Router();
const oktaClient = require('../lib/oktaClient');

/* Create a new User (register). */
/* newUser Object shape suited to the Okta API https://developer.okta.com/docs/api/resources/users?utm_source=syndicate&utm_medium=post&utm_content=scotch-jan18#create-user */
router.post('/', (req, res, next) => {
  if(!req.body) return res.sendStatus(400);
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email,
      userMotto: req.body.userMotto
    },
    credentials: {
      password: {
        value: req.body.password
      }
    }
  };
  oktaClient.createUser(newUser)
    .then(user => {
      res.status(201);
      res.send(user);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    })
});


module.exports = router;
