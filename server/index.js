const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const route = require('./routes');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("CONNECTED TO MONGO DB");
});
app.use(cors());  
app.use(cookieParser());
app.use(express.json());
   
//ROUTES
route(app);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Labrary API',
      version: '1.0.0',
      description: '...'
    },
    servers:[
        {
            url: 'http://localhost:8000'
        }
    ]
  },
  apis: ['./docs/*.js'], // files containing annotations as above
}

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsdoc(options)));

app.listen(8000, () => {
  console.log("Server is running");
});
