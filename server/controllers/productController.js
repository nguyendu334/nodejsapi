const Product = require("../models/Product");
const productService = require("../services/productService");

const productController = {
    //GET ALL PRODUCT
    getAllProducts: async (req, res) => {
        try {
            const product = await productService.getAllProducts();
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //CREATE NEW PRODUCT
    createProduct: async (req, res) => {
        try {
            const product = await productService.createProduct(req.body);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // PRODUCT DETAIL
    productDetail: async (req, res) => {
        try {
            const product = await productService.productDetail(req.params.id);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // UPDATE PRODUCT
    editProduct: async (req, res) => {
        const product = await productService.editProduct({ slug: req.params.slug }, { ...req.body })
        try {
            if (!product)
                return res.status(403).json("Product not found");
            return res.status(200).json("UPDATED!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //DELETE A PRODUCT
    destroyProduct: async (req, res) => {
        try {
            await productService.destroyProduct({ _id: req.params.id });
            res.status(200).json("PRODUCT DELETED");
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    forceDestroyProduct: async (req, res) => {
        try {
            await productService.forceDestroyProduct({ _id: req.params.id });
            res.status(200).json("PRODUCT DELETED");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //RESTORE PRODUCT
    restoreProduct: async (req, res) => {
        try {
            await productService.restoreProduct({ _id: req.params.id });
            res.status(200).json("PRODUCT RESTORED");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // REVIEW PRODUCT
    reviewProduct: async (req, res) => {
        try {
            const product = await productService.reviewProduct(req.params.id, req.body);
            if (!product)
                return res.status(403).json("Product not found");
            return res.status(200).json("REVIEW ADDED!");
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    // GET ALL REVIEWS
    getAllReviews: async (req, res) => {
        try {
            const product = await productService.getAllReviews(req.params.id);
            const reviews = product.reviews;
            return res.status(200).json(reviews);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    // DELETE REVIEW
    deleteReview: async (req, res) => {
        try {
            await Product.reviews.findByIdAndDelete({ _id: req.params.id });
            res.status(200).json("REVIEW DELETED");
        } catch (err) {
            return res.status(500).json(err);
        }
    },

};

module.exports = productController;
