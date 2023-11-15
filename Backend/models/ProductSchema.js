const schema_mongoose=require('mongoose');
const ProductSchema=schema_mongoose.Schema(
    {
        productName:{type: String},
        productImage:{type: String},
        productCategory:{type: String},
        productPrice:{type: String},
        productDescription:{type: String},
        sellerName: { type: String },
        sellerEmail: { type: String },
        sellerPhone: { type: String },
        sellerBrandName: { type: String },
        
    },
    {
        timestamps:true
    }
);
module.exports=schema_mongoose.model('product_details_collection',ProductSchema);