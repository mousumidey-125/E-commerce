const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const AdminModel = require('../models/AdminSchema.js');
const CategoryModel = require('../models/CategorySchema.js')
const SellerModel = require('../models/SellerSchema.js');

router.post('/adminreg', (req, res) => {
    bcrypt.hash(req.body.adminPassword, 10)
        .then((encpass) => {
            const adminObj = new AdminModel({
                adminName: req.body.adminName,
                adminEmail: req.body.adminEmail,
                adminPhone: req.body.adminPhone,
                adminPassword: encpass,

            })
            AdminModel.find({ $or: [{ adminEmail: req.body.adminEmail }, { adminPhone: req.body.adminPhone }] })
                .then((result) => {
                    if (result.length > 0) {
                        res.send([])
                    }
                    else {
                        adminObj.save()
                            .then((result) => {
                                res.send([result])
                            }).catch((err) => {
                                console.log({ message: err.message })
                            })
                    }
                }).catch((err) => {
                    console.log({ message: err.message })
                })
        })

})

router.post("/adminlogin", (req, res) => {
    AdminModel.find({ adminEmail: req.body.adminEmail })
        .then((result) => {
            if (result.length > 0) {
                let collectedPass = req.body.adminPassword;
                let storedPass = result[0].adminPassword;
                bcrypt.compare(collectedPass, storedPass)
                    .then((passMatch) => {
                        if (passMatch == true) {
                            res.send(result)
                        }
                        else {
                            res.send([])
                        }
                    }).catch((err) => {
                        console.log({ message: err.message })
                    })
            }
            else {
                res.send([])
            }
        }).catch((err) => {
            console.log({ message: err.message })
        })
})

router.post('/addCategory', (req, res) => {
    const categoryObj = new CategoryModel({
        categoryName: req.body.categoryName
    })
    CategoryModel.find({ categoryName: req.body.categoryName })
        .then((result => {
            if (result.length > 0) {
                res.send([])
            }
            else {
                categoryObj.save()
                    .then((result) => {
                        res.send([result])
                    }).catch((err) => {
                        console.log({ message: err.message })
                    })
            }
        }))

})

router.get('/getCategory',(req,res)=>{
    CategoryModel.find()
    .then((result)=>{
        if(result.length>0){
            res.send(result)
        }
        else{
            res.send([])
        }
        
    }).catch((err)=>{
        console.log({ message: err.message })
    })
})

router.get('/getSellerDetails',(req,res)=>{
    SellerModel.find()
    .then((result)=>{
        if(result.length>0){
            res.send(result)
        }
        else{
            res.send([])
        }
        
    }).catch((err)=>{
        console.log({ message: err.message })
    })
})

router.put('/statusUpdate',(req,res)=>{
    let sellerStatus={
        status:req.body.status
    }
    SellerModel.findOneAndUpdate({sellerEmail: req.body.sellerEmail},{$set:sellerStatus},{new:true})
    .then((result)=>{
        res.send([result])
    }).catch((err)=>{
        console.log({ message: err.message })
    })
})
module.exports = router;