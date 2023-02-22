const express = require('express');
const { route } = require('../app');
const contact = require('../models/contact.js');
const router = express.Router();
var Contact = require('../models/contact.js');


router.post('/',(req,res,next)=>{
 var contact = new Contact({fullName:req.body.contactName,phone:req.body.contactNumber})
 contact.save((err, newContact) => {
    if(err){
        console.log('there is an error',err);
    } else {
        res.json(newContact);
    }
 });
});

router.get('/',(req,res,next)=>{
    Contact.find((err,contacts)=>{
        if(err){
            console.log('error',err);
        } else {
            res.json({title:"listes des contacts",cont: contacts});
        }
    })
});


router.delete('/:id', (req, res) => {
    Contact.findByIdAndRemove(req.params.id).then((data) => {
        res.json({ message: 'Contact Deleted Successfully' })
    }).catch((err) => {
        res.json({ message: 'Contact Not Deleted' })
    })
});

router.put('/:id', (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body).then((data) => {
        res.json({ message: 'Contact Updated Successfully' })
    }).catch((err) => {
        res.json({ message: 'Contact Not Updated' })
    })
});


module.exports = router ;
