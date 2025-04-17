import { Product } from "../models/product.model.js";

const createProduct = async(req, res)=>{
   const {name, description , price, category, location} = req.body;
   const imageUrl = req.file?.path || null;  
  try {
   if(!name || !description || !price ||!category || !location)
   {
    return res.status(401).json({success:false, message:"All fields are required."})
   }
   const  newProduct = new Product({
    name,
    description,
    price,
    image:imageUrl || null,
    category,
    location
   })
   await newProduct.save();
   res.status(200).json({success:true, message:"Product has  been  created !",newProduct})
} catch (error) {
    res.status(500).json({success:false, message:"Internal error."})
}
}

const getAllProducts = async(req, res)=>{
    try {
        const  products = await Product.find({})
        if(!products){
            return res.status(404).json({success:false, message:"Products no  found! "})
        }
        res.status(200).json({success:true, products})
    } catch (error) {
        res.status(500).json({success:false, message:"Internal error."})
    }
}



export{createProduct, getAllProducts}