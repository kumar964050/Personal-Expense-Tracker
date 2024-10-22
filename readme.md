# API Documentation

This document outlines the API endpoints available for the application. Each endpoint includes information on the HTTP method, URL, request body, response format, and possible status codes.

## Base URL

## Transaction Endpoints

### 1. Get Transaction Summary

- **Endpoint:** `/summary`
- **Method:** `GET`
- **Description:** Retrieve a summary of transactions.

**Responses:**

- **200 OK**

```json
{
  "totalIncome": 10000,
  "totalExpenses": 9000,
  "balance": 1000
}
```

### 2. Get All Transaction

- **Endpoint:** `/`
- **Method:** `GET`
- **Description:** Retrieve all transactions.

**Responses:**

- **200 OK**

```json
[
  {
    "_id": "6717d782b962dccc822d7399",
    "type": "income",
    "amount": 99999,
    "description": "October Salary",
    "category": {
      "_id": "6717d782b962dccc822d7397",
      "name": "Salary",
      "type": "income",
      "__v": 0
    },
    "date": "2024-10-22T16:49:06.191Z",
    "createdAt": "2024-10-22T16:49:06.192Z",
    "updatedAt": "2024-10-22T16:49:06.192Z",
    "__v": 0
  },
  ....
]
```

### 3. Get Transaction by Id

- **Endpoint:** `/6717d782b962dccc822d7399`
- **Method:** `GET`
- **Description:** Retrieve by id transaction.

**Responses:**

- **200 OK**

```json
{
  "_id": "6717d782b962dccc822d7399",
  "type": "income",
  "amount": 99999,
  "description": "October Salary",
  "category": { "name": "Salary", "type": "income" },
  "date": "2024-10-22T16:49:06.191Z",
  "createdAt": "2024-10-22T16:49:06.192Z",
  "updatedAt": "2024-10-22T16:49:06.192Z"
}
```

### 4. POST add new Transaction

- **Endpoint:** `/`
- **Method:** `POST`
- **Description:** add new transactions.

**Responses:**

- **201 OK**

```json
{
  "type": "income",
  "amount": 99999,
  "description": "October Salary",
  "category": "Salary"
}
```

### 5. PUT update Transaction

- **Endpoint:** `/6717d782b962dccc822d7399`
- **Method:** `PUT`
- **Description:** update a transactions.

**Responses:**

- **200 OK**

```json
{
  "type": "income",
  "amount": 99999,
  "description": "October Salary"
}
```

### 6. DELETE a Transaction

- **Endpoint:** `/6717d782b962dccc822d7399`
- **Method:** `DELETE`
- **Description:** delete a transactions.

**Responses:**

- **200 OK**

```json
{
  "message": "Transaction deleted successfully."
}
```
