const schema_mongoose=require('mongoose');
const CategorySchema=schema_mongoose.Schema(
    {
        categoryName:{type: String},
        
    },
    {
        timestamps:true
    }
);
module.exports=schema_mongoose.model('category_details_collection',CategorySchema);