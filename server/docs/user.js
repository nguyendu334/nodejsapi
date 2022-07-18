/**
*@swagger
* components:
*  schema:
*   user:
*    type: object
*    properties:
*     username:
*      defaul: null
*      type: string
*     email:
*      type: string
*      defaul: null
*     password:
*      type: string
*
*/

/**
 * @swagger
 *  /user:
 *  get:
 *   tags:
 *    - User
 *   summary: The list of users
 *   responses:
 *    200:
 *     description: the list of users
 *    404:
 *     description: User not found
 *    500:
 *     description: Internal Server Error
*/

/**
 * @swagger
 *  /login:
 *   post:
 *    tags:
 *     - User
 *    summary: Login user
 *    requestBody:
 *      require: true
 *      content:
 *       application/json:  
 *        schema:
 *          $ref: '#/components/schema/user'
 *    responses:
 *     200:
 *      description: Login successful 
 *     404:
 *      description: Login not found
 *     500:
 *      description: Internal Server Error
*/

/**
 * @swagger
 *  /register:
 *   post:
 *    tags:
 *     - User
 *    summary: Register user
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schema/user'
 *    responses:
 *     200:
 *      description: register successful 
 *     500:
 *      description: Internal Server Error
 *  
*/

/**
 * @swagger
 *  /user/{id}:
 *   delete:
 *    tags:
 *     - User
 *    summary: Delete a user
 *    parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      description: id of the user want delete
 *    responses: 
 *      200:
 *        description: User deleted successfully
 *      404:
 *        description: User not found
 *      500:
 *       description: Internal Server Error
*/

/**
 * @swagger
 *  /user/{id}:
  *   put:
 *    tags:
 *     - User
 *    summary: Edited user
 *    parameters:
 *     - name: id
 *       in: path
 *       required: true
 *       description: id of the product 
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schema/user'
 *    responses:
 *      200:
 *       description: edited user successfully
 *      404:
 *       description: user not found
 *      500:
 *       description: Internal Server Error
*/

/**
 * @swagger
 *  /logout:    
 *   post:
 *    tags:
 *     - User
 *    summary: Logout user
 *    responses:
 *     200:
 *      description: Logged out successful
 *  
*/