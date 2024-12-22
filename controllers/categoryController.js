
import Category from '../models/category.js';
export function createCategory(req,res){

    if(req.user == null){
        res.status(403).json({
            message: "Unauthorized"
        })
        return
    }if (req.user.type !="admin"){
        res.status(403).json({
            message: "Forbidden"
        })
        return
    }

    const newcategory = new Category(req.body)
    newcategory.save().then(
        (result)=>{
            res.json(
                {
                    message:"Category created successfully",
                    result: result
                }
            )
        }
    ).catch (
        (err)=>{
            res.json(
                {
                    message: "Category creation failed",
                    error: err
                }
            )
        }
    )
}

//delete category
export function deleteCategory(req,res){

    if(user == null){
        res.status(403).json({
            message: "Unauthorized"
        })
        return
    }if (req.user.type !="admin"){
        res.status(403).json({
            message: "Forbidden"
        })
        return
    }

    const name = req.params.name
    Category.findOneAndDelete({name:name}).then(
        ()=>{
            req.json(
                {
                    message:"Category deleted successfully"
                }
            )
        }
    ).catch(
        ()=>{
            req.json(
                {
                    message:"Category deletion failed"
                }
            )
        }
    )
}
  
export function getCategory(req,res){
    Category.find().then(
        (result)=>{
            res.json({
                Categories: result 
            }
                
            )
        }
    ). catch(
        ()=>{
            res.json({
                message : "Failed to get categories"
            })
        }
    )
}

export function getCategoryByName(req,res){
    const name = req.params.name;
    Category.findOne({name:name}).then(
        (result)=>{
            if(result== null){
            res.json(
                {
                    message: "Category not found"
                }
            )
            }else {
                res.json(
                    {
                        category : result
                    }
                )
            }
        }
    ).catch(
        ()=>{
            res.json(
                {
                    message: "Failes to get category"
                }
            )
        }
    )
}

//update category
export function updateCategory(req,res){
    if(!isAdminValid(req)){
        res.status(403).json({
message: "Unauthorized"
        } )
        return
    }

   const name= req.params.name;
   
    Category.updateOne({name : name}.req.body).then(
        ()=>{
            res.json({
                message: "Category updated successfully"
            })
    
  }  ).catch(
    ()=>{
        res.json({
            message: "Failed to update category"
        }

        )
    }
  )
        
    
}

function isAdminValid(req){
    if(req.user == null){
       return false
        }
        
    if (req.user.type !="admin"){
       
        return false
    }
    return true;  
}