# 📦 Inventory API (ExpressJS)

## 🚀 Overview

This is a basic backend API built using **ExpressJS** for managing an inventory system.
Instead of using MongoDB, this project uses an **in-memory array** to store data.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Postman (for testing)

---

## ▶️ How to Run the Project

1. Clone the repository:

```bash
git clone <your-repo-link>
```

2. Navigate to the project folder:

```bash
cd inventory-api
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node app.js
```

5. Server will run on:

```text
http://localhost:3000
```

---

## 📌 API Endpoints

### 🔹 Basic Routes

#### 1. GET /

* **Description:** Check if API is running
* **Response:**

```json
"Inventory API is Running"
```

---

#### 2. GET /health

* **Description:** Check server health
* **Response:**

```json
{
  "status": "Server is running successfully"
}
```

---

### 🔹 Item Routes

#### 3. GET /items

* **Description:** Get all items
* **Response:**

```json
[
  {
    "id": 1,
    "name": "Biriyani",
    "quantity": 2,
    "price": 180
  }
]
```

---

#### 4. GET /items/:id

* **Description:** Get item by ID
* **Response:**

```json
{
  "id": 1,
  "name": "Biriyani",
  "quantity": 2,
  "price": 180
}
```

---

#### 5. POST /items

* **Description:** Add a new item
* **Body (JSON):**

```json
{
  "name": "Juice",
  "quantity": 3,
  "price": 60
}
```

---

#### 6. PUT /items/:id

* **Description:** Update entire item

---

#### 7. PATCH /items/:id

* **Description:** Update partial item

---

#### 8. DELETE /items/:id

* **Description:** Delete item by ID

---

## ⚙️ Middleware

### 🔹 Logger Middleware

Logs request method and URL:

```bash
[GET] /items
[POST] /items
```

---

### 🔹 404 Error Handler

Returns JSON response for invalid routes:

```json
{
  "message": "Invalid route"
}
```

---

## 📬 Testing with Postman

* All APIs were tested using Postman
* Included:

  * GET requests
  * POST request with JSON body
  * PUT, PATCH, DELETE operations

👉 You can find:

* Screenshots OR
* Exported Postman Collection in this repository

---

## ⚠️ Note

* This project uses an **in-memory array**, so:

  * Data will reset when server restarts
* No database (MongoDB) is used in this implementation

---

## 📂 Project Structure

```
project/
│
├── app.js
├── routes/
├── controllers/
└── README.md
```

---

## 🎯 Learning Outcome

* Built REST APIs using ExpressJS
* Implemented middleware
* Understood CRUD operations
* Tested APIs using Postman

---

## 👨‍💻 Author

Athul
