const schema_mongoose = require('mongoose');
const SellerSchema = schema_mongoose.Schema(
    {
        sellerName: { type: String },
        sellerEmail: { type: String },
        sellerPhone: { type: String },
        sellerPassword: { type: String },
        sellerBrandName: { type: String },
        sellerAddress: { type: String },
        status:{type:Boolean},
    },
    {
        timestamps: true
    }
);
module.exports = schema_mongoose.model('seller_details_collection', SellerSchema);