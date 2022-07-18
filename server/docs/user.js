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
 *    500:
 *     description: Internal Server Error
 *     content:
 *      application/json:
 *       schema:
 *         $ref: "#/components/schema/product"
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
 *  /{id}:
 *   delete:
 *    tags:
 *     - User
 *    summary: Delete user
 *    requestBody:
 *      require: true
 *      content:
 *       application/json:  
 *        schema:
 *          $ref: '#/components/schema/user'
 *    responses:
 *     200:
 *      description: Delete users successful 
 *     404:
 *      description: Users not found
 *     500:
 *      description: Internal Server Error 
*/

/**
 * @swagger
 *  /{id}:
 *   put:
 *    tags:
 *     - User
 *    summary: Edit user
 *    requestBody:
 *      require: true
 *      content:
 *       application/json:  
 *        schema:
 *          $ref: '#/components/schema/user'
 *    responses:
 *     200:
 *      description: Edit users successful 
 *     404:
 *      description: Users not found
 *     500:
 *      description: Internal Server Error 
*/


/**
 * @swagger
 *  /logout:    
 *   post:
 *    tags:
 *     - User
 *    summary: Logout user
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schema/user'
 *    responses:
 *     200:
 *      description: Logged out successful
 *  
*/