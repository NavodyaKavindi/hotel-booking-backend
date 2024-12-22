import express from 'express';
import{createCategory} from '../controllers/categoryController.js'
import { deleteCategory } from '../controllers/categoryController.js';
import { getCategory } from '../controllers/categoryController.js';
import { getCategoryByName } from '../controllers/categoryController.js';
import { updateCategory } from '../controllers/categoryController.js';

 const categoryRouter= express.Router()


 categoryRouter.post("/",createCategory)

 categoryRouter.delete("/:name",deleteCategory) 
 

 categoryRouter.get("/searchByPrice", (req,res)=>{
    res,json({
        message: "searchByPrice"
    })
 })
 categoryRouter.get("/:name",getCategoryByName)
 categoryRouter.get("/",getCategory);

 categoryRouter.put("/:name",updateCategory)

 export default categoryRouter;