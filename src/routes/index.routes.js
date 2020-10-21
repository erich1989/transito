const express = require('express');
const router = express.Router();
const path = require('path');

//router
router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../docs/index.html'));
})

module.exports = router;