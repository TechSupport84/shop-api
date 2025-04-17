import express from "express"
import { createProduct ,getAllProducts} from "../controllers/productController.js"
const router = express.Router()


//Get ,Post ,  Put(patch)  , Delete 
router.get("/",getAllProducts)

router.post("/create-product",createProduct)






export default router;