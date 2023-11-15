const schema_mongoose=require('mongoose');
const AdminSchema=schema_mongoose.Schema(
    {
        adminName:{type: String},
        adminEmail:{type: String},
        adminPhone:{type: String},
        adminPassword:{type: String},
        
    },
    {
        timestamps:true
    }
);
module.exports=schema_mongoose.model('admin_details_collection',AdminSchema);