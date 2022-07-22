const Product = require("../models/Product");

const productService = {
    getAllProducts: () => {
        return Product.find({});
    },

    createProduct: (req) => {
        const newProduct = new Product({
            name: req.name,
            price: req.price,
            description: req.description,
            // image: {
            //     data: path.join('img/' + req.file.filename),
            //     contentType: 'image/png',
            // },
            category: req.category,
        })
        const product = newProduct.save();
        return product;
    },

    productDetail: (id) => {
        return Product.findById(id);
    },

    editProduct: (slug, data) => {
        return Product.updateOne(slug, data);
    },

    destroyProduct: (id) => {
        return Product.delete(id);
    },

    forceDestroyProduct: (id) => {
        return Product.deleteOne(id);
    },

    restoreProduct: (id) => {
        return Product.restore(id);
    },

    reviewProduct: async (id, data) => {
        const product = await Product.findById(id);
        const { avgRating, comment } = data;
        if (product) {
            const review = {
                avgRating: Number(avgRating),
                comment,
            };
            product.reviews.push(review);
            product.totalReviews = product.reviews.length;
            product.avgRating = product.reviews.reduce((acc, item) => item.avgRating + acc, 0) / product.reviews.length;
            await product.save();
            return product;
        } else {
            return product;
        }
    },

    getAllReviews: (id) => {
        return Product.findById(id);
    }
}

module.exports = productService;