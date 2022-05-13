const express = require('express')
const router = express.Router()

// GET landing page
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

//GET dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard')
})
module.exports = router

