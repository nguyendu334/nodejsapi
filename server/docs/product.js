/**
 * @swagger
 * components:
 *  schema:
 *   product:
 *    type: object
 *    properties:
 *     id:
 *       type: integer
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
 *     rating:
 *      type: integer
 *     slug:
 *      type: sting
 *      slug: name
 *     avgRating:
 *      type: integer
 *      default: 0
 *     category:
 *      type: array
 *    example:
 *      id: 1
 *      name: Nodejs
 *      price: 100
 *      description: product for development
 *       
 */
/**
 * @swagger
 *  /product/{slug}:
 *   get:
 *    tags:
 *     - Products
 *    summary: Product detail
 *    parameters:
 *    - name: slug
 *      in: path
 *      type: string
 *      description: slug Product detail 
 *      repuired: true
 *    responses:
 *      200:
 *        description: successful 
 *      404:
 *        description: not found Product
 *   post:
 *    tags:
 *     - Products
 *    summary: Rating product
 *    parameters:
 *     - name: slug
 *       in: path
 *       description: slug Product detail
 *       required: true
 *    requestBody:
 *       required: true
 *       content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schema/product'
 *    responses:
 *      200:
 *       description: Rating product successfully
 *      500:
 *       description: Internal Server Error
 *   delete:
 *    tags:
 *     - Products
 *    summary: delete a product by slug
 *    parameters:
 *    - name: slug
 *      in: path
 *      required: true
 *      description: slug of the product want delete
 *    responses: 
 *      200:
 *        description: product deleted successfully
 *      404:
 *        description: product not found
 *   patch:
 *    tags:
 *     - Products
 *    summary: edited product
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
 *      500:
 *       description: Internal Server Error
 * /product/create:
 *  post:
 *    tags:
 *     - Products
 *    summary: Create product
 *    requestBody:
 *     content:
 *      multipart/form-data: 
 *       schema:
 *         $ref: '#/components/schema/product'
 *    responses:
 *      201:
 *       description: Created product successfully
 *      500:
 *       description: Internal Server Error
 * /product/filter:
 *   get:
 *    tags:
 *    - Products
 *    summary: Filter product by category or name
 *    parameters:
 *     - name: category
 *       in: query
 *       schema:
 *         type: array
 *         items:
 *          type: string
 *       description: filter products by category
 *     - name: name
 *       in: query
 *       description: filter products by name
 *    responses:
 *       200:
 *        description: filter products successfully
 *       404:
 *        description: products not found
 */

//  requestBody:
//  *     required: true
//  *     content:
//  *      application/json:
//  *       schema:
//  *         $ref: '#/components/schema/product'
// - name: name
// *        in : formData
// *        description: name of the product
// *        schema:
// *          type: string
// *      - name: price 
// *        description: price of the product
// *        in: formData
// *        schema:
// *          type: number
// *      - name: description
// *        description: description of the product
// *        in: formData
// *        schema:
// *          type: string 
// *      - name: image
// *        description: image of the product
// *        in: formData
// *        required: true 
// *        schema:
// *          type: file