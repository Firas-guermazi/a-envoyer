const express =require('express');
const res = require('express/lib/response');
const contact = require('../models/contact');
const {addContact,Delete,put,getOneContact,contactList} = require ('../Controllers/contact')
const route = express.Router();
// methode post
// request.body
route.post('/', addContact)
// methode get
//get doesnt have body
route.get('/', contactList)
// methode delete
//uses req param
route.delete('/:ID',Delete)
//methode update
route.put('/:ID',put)
// methode get only 1 contact 
route.get('/:ID',getOneContact )
module.exports = route;