const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const SellerModel = require('../models/SellerSchema.js');
const ProductModel = require('../models/ProductSchema.js');

const multer=require('multer');
//const upload=multer({dest:'uploads/'})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const customDestination = 'D:/E-commerce/Frontend/src/assets/';
      cb(null, customDestination)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null,uniqueSuffix+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/sellerreg', (req, res) => {
    bcrypt.hash(req.body.sellerPassword, 10)
        .then((encpass) => {
            const sellerObj = new SellerModel({
                sellerName: req.body.sellerName,
                sellerEmail: req.body.sellerEmail,
                sellerPhone: req.body.sellerPhone,
                sellerPassword: encpass,
                sellerBrandName: req.body.sellerBrandName,
                sellerAddress: req.body.sellerAddress,
                status: req.body.status,
            })
            SellerModel.find({ $or: [{ sellerEmail: req.body.sellerEmail }, { sellerPhone: req.body.sellerPhone }, { sellerBrandName: req.body.sellerBrandName, }] })
                .then((result) => {
                    if (result.length > 0) {
                        res.send([])
                    }
                    else {
                        sellerObj.save()
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

router.post("/sellerlogin", (req, res) => {
    SellerModel.find({ sellerEmail: req.body.sellerEmail })
        .then((result) => {
            if (result.length > 0) {
                let collectedPass = req.body.sellerPassword;
                let storedPass = result[0].sellerPassword;
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

 router.post('/addProduct', (req, res) => {
    
        const productObj = new ProductModel({
            productName: req.body.productName,
            productImage: req.body.productImage,
            productCategory: req.body.productCategory,
            productPrice: req.body.productPrice,
            productDescription: req.body.productDescription,
            sellerName: req.body.sellerName,
            sellerEmail: req.body.sellerEmail,
            sellerPhone: req.body.sellerPhone,
            sellerBrandName: req.body.sellerBrandName
        })
        ProductModel.find({ $and: [{ sellerEmail: req.body.sellerEmail }, { productName: req.body.productName }] })
            .then((result) => {
                if (result.length > 0) {
                    res.send([])
                }
                else {
                    productObj.save()
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


router.get('/getProduct',(req,res)=>{
    ProductModel.find()
    .then((result)=>{
        res.send(result)
    })
})

router.post("/uploadimg",upload.single("image"),(req,res)=>{
    const productObj = new ProductModel({
        productImage: req.file.filename,
    })
    productObj.save()
    .then((result)=>{
        res.send(result)
    })
})

router.get('/getImage',(req,res)=>{
    ProductModel.find()
    .then((result)=>{
        res.send(result)
    })
})

module.exports = router;