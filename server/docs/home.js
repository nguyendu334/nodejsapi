/**
 * @swagger
 * components:
 *  schema:
 *   product:
 *    type: object
 *    properties:
 *     id:
 *      type: integer
 *     name:
 *      type: string
 *     price:
 *      type: integer
 *     description:
 *      type: string
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
 *      id:
 *      name: 
 *      price:
 *      description: 
 *      avgRating:
 *      slug:
 *       
 */
/**
 * @swagger
 * tags:
 * - name: Products
 *   description: the product API
 * - name: User
 *   description: Login & register
 * - name: Home
 *   description: list of products
 */

 /**
  * @swagger
  *  /:
  *  get:
  *   tags:
  *    - Home
  *   summary: the list of products
  *   responses:
  *    200:
  *     description: the list of products
  *    500:
  *     description: Internal Server Error
  *     content:
  *      application/json:
  *       schema:
  *         $ref: "#/components/schema/product"
  *  post:
  *    tags:
  *     - Home
  *    summary: list of products
  *    responses:
  *     200:
  *       description: the list of products
  *     500:
  *       description: Internal Server Error
  *       content:
  *        application/json:
  *         schema:
  *          type: array
  *          items:
  *           $ref : '#/components/schema/product'
  * 
  */