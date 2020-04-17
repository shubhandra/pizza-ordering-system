const express = require('express')
const User = require('../models/userModel')
const auth = require('../middleware/auth')

const router = express.Router()

// Create a new user
router.post('/users/register', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

//Login a registered user
router.post('/users/login', async(req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }

})

// View logged in user profile
router.get('/users/me', auth, async(req, res) => {
    res.send(req.user)
})

// View all user profile
router.get('/users/all', auth, async(req, res) => {
  try {
      if(req.user.role === "admin") {
          res.send(await User.find());
      } else {
          res.send("Only admin can view all users");
      }
  } catch (err) {
      res.json({ message: err });
  }
})

// Log user out of the application
router.post('/users/me/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send("You have been logged out.")
    } catch (error) {
        res.status(500).send(error)
    }
})

// Log user out of all devices
router.post('/users/me/logoutfromall', auth, async(req, res) => {
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send("You have been logged out from all devices.")
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router
