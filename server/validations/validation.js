const Joi = require('joi')

const register = Joi.object({
    email: Joi.string().email().lowercase().required(),
    username: Joi.string().min(1).max(20).required(),
    password: Joi.string().min(6).required(),
});

const login = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required(),
});  

const product = Joi.object({
    name: Joi.string().min(1).max(20).lowercase().required(),
    price: Joi.number().min(1).required(),
    description: Joi.string().min(1).max(200).required(),
    category: Joi.array().items(Joi.string().min(1).max(20).required()),  
});

const review = Joi.object({
    avgRating: Joi.number().min(1).max(10).required(),
    comment: Joi.string().min(1).max(200).required(),
});

module.exports = {
    register,
    login,
    product,
    review,
};


