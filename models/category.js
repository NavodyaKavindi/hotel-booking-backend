import mongoose from "mongoose" ; 

const categorySchema= mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true
        },

        price:{
            type: Number,
            required:true,

        },

        features:[
            {
                Type:String,


            }
        ],
        descripton: {
            type: String,
            required: true,

        },
        image:{
            type: String
        }
    }
);

const Category= mongoose.model("categories", categorySchema)

export default Category;