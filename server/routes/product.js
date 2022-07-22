const productController = require("../controllers/productController");
const auth = require("../middleware/auth");
const validator = require('../middleware/validate');

const router = require("express").Router(); 

//GET ALL PRODUCTS
router.get("/", productController.getAllProducts);       
// CREATE PRODUCTS     
router.post("/create", validator('product'),  auth.verifyToken, productController.createProduct);
// EDIT PRODUCTS
router.put("/:slug", validator('product'), auth.verifyTokenAndUserAuthorization, productController.editProduct);
// PRODUCT DETAIL
router.get("/:id", productController.productDetail);
//DELETE PRODUCT
router.delete("/:id", auth.verifyTokenAndUserAuthorization, productController.destroyProduct);
router.delete("/:id/force", auth.verifyTokenAndUserAuthorization, productController.forceDestroyProduct);
// RESTORE PRODUCT
router.patch("/:id/restore", auth.verifyTokenAndUserAuthorization, productController.restoreProduct);
// REVIEW PRODUCT
router.post("/:id/review", validator('review'), auth.verifyToken, productController.reviewProduct);
// GET ALL REVIEWS
router.get("/:id/review", productController.getAllReviews); 
// DELETE REVIEW
router.delete("/:id/review", auth.verifyTokenAndUserAuthorization, productController.deleteReview); 

module.exports = router;    