const authRouter = require('./auth')
const userRouter = require('./user')
const productRouter = require('./product')

function route(app) {   

    app.use('/product', productRouter);
    app.use('/user', userRouter);
    app.use('/', authRouter);
}

module.exports = route;