

# Bicycle Store Server Application

Welcome to the **Bicycle Store Server Application**, built with **Express**, **Node.js**, **Mongoose**, **MongoDB**, **TypeScript**, and **Joi** for validation, this app provides a minimal yet robust set of APIs to handle bicycle-related operations. The application features **7 APIs** with limited but essential functionalities.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v7 or higher)
- **MongoDB** (running instance)

### Installation and Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Application (Development Mode)**
   ```bash
   npm run start-dev
   ```
   The application will now run locally.

3. **Build the Application**
   To compile the TypeScript code to JavaScript:
   ```bash
   npm run build
   ```

---

## API Endpoints

### 1. **Add Product**

#### Endpoint
```
POST /api/products
```

#### Description
This endpoint is used to add a new bicycle product to the database.

#### Request Body
Send a JSON object with the following structure:
```json
{
  "name": "Roadster 5000",
  "brand": "SpeedX",
  "price": 300,
  "type": "Road",
  "description": "A premium road bike designed for speed and performance.",
  "quantity": 20,
  "inStock": true
}
```

#### Response
Upon successful creation, the server will return:
```json
{
  "message": "Bicycle created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Roadster 5000",
    "brand": "SpeedX",
    "price": 300,
    "type": "Road",
    "description": "A premium road bike designed for speed and performance.",
    "quantity": 20,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```



### 2. **Get All Bicycles**

#### Endpoint
```
GET /api/products
```

#### Description
This endpoint retrieves a list of all bicycles stored in the database, along with their details such as name, brand, price, type, and more.

#### Query Parameters
- **searchTerm** (optional): Allows filtering based on specific criteria like `name`, `brand`, or `type`.  
  Example:  
  ```
  /api/products?searchTerm=type
  ```

#### Response
On success, the server returns the following response:
```json
{
  "message": "Bicycles retrieved successfully",
  "status": true,
  "data": [
    {
      "_id": "648a45e5f0123c45678d9012",
      "name": "Roadster 5000",
      "brand": "SpeedX",
      "price": 300,
      "type": "Road",
      "description": "A premium road bike designed for speed and performance.",
      "quantity": 20,
      "inStock": true,
      "createdAt": "2024-11-19T10:23:45.123Z",
      "updatedAt": "2024-11-19T10:23:45.123Z"
    }
  ]
}
```

### 3. **Get a Specific Bicycle**

#### Endpoint
```
GET /api/products/:productId
```

#### Description
Retrieve the details of a specific bicycle using its unique ID.

#### Response
```json
{
  "message": "Bicycle retrieved successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Roadster 5000",
    "brand": "SpeedX",
    "price": 300,
    "type": "Road",
    "description": "A premium road bike designed for speed and performance.",
    "quantity": 20,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

---

### 4. **Update a Bicycle**

#### Endpoint
```
PUT /api/products/:productId
```

#### Description
Update the details of a specific bicycle using its unique ID.

#### Request Body
Provide the fields to be updated:
```json
{
  "price": 350,
  "quantity": 15
}
```

#### Response
```json
{
  "message": "Bicycle updated successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Roadster 5000",
    "brand": "SpeedX",
    "price": 350,
    "type": "Road",
    "description": "A premium road bike designed for speed and performance.",
    "quantity": 15,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T11:00:00.000Z"
  }
}
```

---

### 5. **Delete a Bicycle**

#### Endpoint
```
DELETE /api/products/:productId
```

#### Description
Delete a specific bicycle from the database using its unique ID.

#### Response
```json
{
  "message": "Bicycle deleted successfully",
  "status": true,
  "data": {}
}
```

---

### 6. **Order a Bicycle**

#### Endpoint
```
POST /api/orders
```

#### Description
Place an order for a bicycle.  
Includes inventory management logic:
- Reduce the `quantity` in the product model based on the order.
- If the `quantity` reaches zero, set `inStock` to `false`.
- Handle insufficient stock by returning an appropriate error message.

#### Request Body
```json
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 600
}
```

#### Response
```json
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 600,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z"
  }
}
```

---

### 7. **Calculate Revenue from Orders**

#### Endpoint
```
GET /api/orders/revenue
```

#### Description
Calculate the total revenue from all orders using a MongoDB aggregation pipeline.  
The revenue is computed by multiplying the price of each bicycle by the quantity ordered.

#### Response
```json
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 1200
  }
}
```

---
