const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const { Schema } = mongoose;
mongoose.plugin(slug);

const reviewSchema = new mongoose.Schema({

    avgRating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const productSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    authorID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    slug: {
        type: String,
        slug: "name"
    },
    reviews: [reviewSchema],
    avgRating: {
        type: Number,
        required: true,
        default: 0,
    },
    category: {
        type: Array,
    },
    totalReviews: {
        type: Number,
        required: true,
        default: 0,
    },

}, {
    timestamps: true
})

productSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' })

module.exports = mongoose.model("Product", productSchema);