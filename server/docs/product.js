/**
 * @swagger
 * components:
 *  schema:
 *   reviews:
 *    type: object
 *    properties:
 *     avgRating:
 *      type: integer
 *      default: 0
 *    comment:
 *     type: string
 *       
 */

/**
 * @swagger
 * components:
 *  schema:
 *   product:
 *    type: object
 *    properties:
 *     name:
 *       type: string
 *     price:
 *       type: integer
 *     description:
 *       type: string
 *     image:
 *      type: file
 *      data: buffer
 *      contentType: string
 *     category:
 *      type: array
 *       
 */

/**
 * @swagger
 * tags:
 * - name: Products
 *   description: The product API
 * - name: User
 *   description: Login & register
 */

/**
 * @swagger
 *  /product:
 *  get:
 *   tags:
 *    - Products
 *   summary: The list of products
 *   responses:
 *    200:
 *     description: the list of products
 *    500:
 *     description: Internal Server Error
 *     content:
 *      application/json:
 *       schema:
 *         $ref: "#/components/schema/product"
 * 
 * /product/create:
 *  post:
 *    tags:
 *     - Products
 *    summary: Create product
 *    requestBody:
 *     content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schema/product'
 *    responses:
 *      200:
 *       description: Created product successfully
 *      500:
 *       description: Internal Server Error
 * 
 */

/**
 * @swagger
 *  /product/{id}:
 *   get:
 *    tags:
 *     - Products
 *    summary: Product detail
 *    parameters:
 *    - name: id
 *      in: path
 *      type: string
 *      description: id Product detail 
 *      repuired: true
 *    responses:
 *      200:
 *        description: successful 
 *      404:
 *        description: not found Product
 *      500:
 *        description: Internal Server Error
 *   delete:
 *    tags:
 *     - Products
 *    summary: Delete a product
 *    parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      description: id of the product want delete
 *    responses: 
 *      200:
 *        description: product deleted successfully
 *      404:
 *        description: product not found
 *      500:
 *       description: Internal Server Error
 * 
 * /product/{id}/force:
 *   delete:
 *    tags:
 *     - Products
 *    summary: Delete a product
 *    parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      description: id of the product want delete
 *    responses: 
 *      200:
 *        description: product deleted successfully
 *      404:
 *        description: product not found
 *      500:
 *        description: Internal Server Error
 * 
 * /product/{slug}:
 *   put:
 *    tags:
 *     - Products
 *    summary: Edited product
 *    parameters:
 *     - name: slug
 *       in: path
 *       required: true
 *       description: slug of the product 
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schema/product'
 *    responses:
 *      200:
 *       description: edited product successfully
 *      404:
 *        description: product not found
 *      500:
 *       description: Internal Server Error
 * 
 * /product/{id}/restore:
 *   patch:
 *    tags:
 *     - Products
 *    summary: Restore a product
 *    parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      description: id of the product want delete
 *    responses: 
 *      200:
 *        description: restore successfully
 *      404:
 *        description: product not found
 *      500:
 *        description: Internal Server Error
 * 
 * /product/{id}/review:
 *   get:
 *    tags:
 *     - Products
 *    summary: Review a product
 *    parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      description: id of the product want delete
 *    responses: 
 *      200:
 *        description: product deleted successfully
 *      403:
 *        description: product not found
 *      500:
 *         description: Internal Server Error
 *   post:
 *    tags:
 *     - Products
 *    summary: Create review
 *    requestBody:
 *     content:
 *      multipart/form-data: 
 *       schema:
 *         $ref: '#/components/schema/product'
 *    responses:
 *      200:
 *       description: Created review successfully
 *      403:
 *        description: product not found
 *      500:
 *       description: Internal Server Error
 */

