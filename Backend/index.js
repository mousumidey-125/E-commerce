const express=require('express');
var app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.json());
bodyParser.urlencoded({ extended: true })
app.use(express.json())
const cors=require('cors');
app.use(cors());



const my_mongoose=require('./dbconnect-promise')

const adminAPI=require('./controllers/AdminAPI')
app.use('/admin',adminAPI)

const userAPI=require('./controllers/UserAPI')
app.use('/user',userAPI)

const sellerAPI=require('./controllers/SellerAPI')
app.use('/seller',sellerAPI)

app.listen(5000,()=>{console.log("Express Server started at 5000 port")}) 
