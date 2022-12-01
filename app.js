const express = require("express");
const app = express();
const port = process.env.FC_PORT || 3000;
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "FREEDOM CARS",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://127.0.0.1:3000",
      },
    ],
  },
  apis: ["./app.js"],
};

const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

mongoose
  .connect(
    `mongodb+srv://raiz123:raiz123@cluster0.nil7sel.mongodb.net/freedom_cars`
  )
  .then(() => {
    console.log("DB CONNECTED SUCCESSFULLY");
  })
  .catch((err) => {
    console.log("DB NOT CONNECTED!! " + err);
  });

const bookings = require("./routers/bookings");
const version = require("./routers/version");
const specification = require("./routers/specification");
const features = require("./routers/feature");
const coupons = require("./routers/coupon");
const carprice = require("./routers/carprices");
const carmodel = require("./routers/carmodel");

app.use("/freedom-cars-bookings", bookings);
app.use("/freedom-cars-version", version);
app.use("/freedom-cars-specification", specification);
app.use("/freedom-cars-features", features);
app.use("/freedom-cars-coupons", coupons);
app.use("/freedom-cars-carprice", carprice);
app.use("/freedom-cars-carmodel", carmodel);

app.get("/get", (req, res) => {
  res.status(200).send("Hello I am from SERVER");
});

//swagger checking API
/**
 * @swagger
 * /get:
 *  get:
 *      description: This API is used getting the details
 *      responses:
 *          200:
 *              description: Success
 *
 */

//get all the data of schema by swagger
/**
 * @swagger
 * /freedom-cars-carprice/all:
 *  get:
 *      summary: To get the booking details from the list
 *      description: This API works on booking details fetchig
 *      responses:
 *          200:
 *              description: Success
 */

//get the data by the data of schema by swagger
/**
 * @swagger
 * /freedom-cars-carprice/get/{id}:
 *    get:
 *     summary: Fetch the individual objects.
 *     description: Get all Employee by id.
 *     parameters:
 *          - in : path
 *            name : id
 *            required: true
 *            description: id required
 *            schema:
 *               type: string
 *     responses:
 *       200:
 *         description: A single object.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     customer_name:
 *                       type: string
 */


//post the data by swagger
/**
 * @swagger
 * /freedom-cars-carprice/new:
 *    post:
 *     summary: to send the individual data.
 *     description: send the data.
 *     requestBody: 
 *         required: true
 *         content:
 *              application/json:
 *                 schema:
 *                    carprices:
 *                             type: object
 *                             properties:
 *                                drive_period:
 *                                     type: integer
 *                                car_model_name:
 *                                      type: string 
 *     responses:
 *       200:
 *         description: added successfully.
 *         
 */


app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`);
});



//  /upload:
//  post:
//    summary: Uploads a file.
//    consumes:
//      - multipart/form-data
//    parameters:
//      - in: formData
//        name: upfile
//        type: file
//        description: The file to upload.