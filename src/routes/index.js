const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title:'Apofis Skate'});
    
});

router.get('/contact', (req, res) => {
    res.render('contact', {title:'Contact Page'});
    
});

router.get('/form', (req, res) => {
    res.render('form', {title_form:'Page of form'});
    
});

module.exports = router;