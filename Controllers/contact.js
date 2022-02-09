const member= require('../models/contact');
exports.addContact=async(req, res)=> {
    try {
    const addedContact = new member (req.body)
    await addedContact.save()
    
    res.status(200).send({msg:'successfully added contact', addedContact})
    } catch (error) {
    res.status(500).send({msg:'error while adding contact', error})
    }
    }

    exports.contactList=async(req, res)=> {
        try {
            const contacts= await member.find()
            res.status(200).send({msg:'successfully found contact', contacts})
            
        } catch (error) {
            res.status(500).send({msg:'list not found', error})
        }
        }
        exports.Delete=async(req,res)=> {
            const  {ID}=req.params
             try {
                 const deleteContacts= await member.findByIdAndDelete(ID)
                 res.status(200).send({msg:'successfully found contact', deleteContacts})
                 
             } catch (error) {
         res.status(500).send({msg:'contact not delete', error})
                 
             }
         }
         exports.put=async(req,res)=>{
            const {ID}=req.params
            try {
                const updatedContact=await member.findByIdAndUpdate(ID,{$set:{...req.body}})
                res.status(200).send({msg:'contact updated',updatedContact})
        
                
            } catch (error) {
                res.status(500).send({msg:'contact not updated', error})
            }
        }
        exports.getOneContact=async(req, res)=> {
            const {ID}=req.params
            try {
                const oneContact= await member.findById(ID)
                res.status(200).send({msg:'successfully found contact', oneContact})
                
            } catch (error) {
                res.status(500).send({msg:'contact not found', error})
            }
            }