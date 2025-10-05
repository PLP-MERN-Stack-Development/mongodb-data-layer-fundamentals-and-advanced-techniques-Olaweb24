# MongoDB Data Layer Fundamentals and Advanced Techniques

## 📚 Project Overview

Welcome to the **MongoDB Data Layer Fundamentals and Advanced Techniques** project, part of the Power Learn Project (PLP) MERN Stack Development curriculum. This project is designed to equip you with essential skills for working with MongoDB in modern web applications, focusing on both fundamental concepts and advanced data management techniques.

You will learn how to:
- Set up MongoDB locally or in the cloud (MongoDB Atlas)
- Connect to MongoDB using Node.js
- Perform CRUD operations and advanced queries
- Harness the power of MongoDB's aggregation framework
- Optimize query performance with indexing

All practical exercises use a **Bookstore** scenario, with a `books` collection for hands-on operations.

---

## 📑 Table of Contents

- [Project Overview](#project-overview)
- [Repository Structure](#repository-structure)
- [Learning Objectives](#learning-objectives)
- [Setup & Installation](#setup--installation)
- [Assignment Tasks (Summary)](#assignment-tasks-summary)
- [Script Descriptions](#script-descriptions)
- [Troubleshooting](#troubleshooting)
- [Screenshots](#screenshots)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Submission Checklist](#submission-checklist)
- [License](#license)

---

## 📂 Repository Structure

```
.
├── Mongodb-screenshot/            # Place your MongoDB Compass/Atlas screenshots here
├── SETUP_INSTRUCTIONS.md          # Step-by-step setup and troubleshooting guide
├── Week1-Assignment.md            # Assignment tasks and requirements
├── examples/                      # Example scripts for connection and shell usage
│   ├── mongodb_connection_example.js
│   ├── mongodb_shell_example.js
│   └── package.json
├── insert_books.js                # Script to populate the books collection
├── queries.js                     # All required MongoDB queries & aggregations
├── package.json                   # Project metadata and dependencies
├── package-lock.json              # Dependency lock file
└── README.md                      # (This file) Comprehensive project guide
```

---

## 🎯 Learning Objectives

By completing this project, you will be able to:

- **Install and configure MongoDB** (locally or in the cloud)
- **Connect to MongoDB using Node.js** and the official driver
- **Create and manage databases and collections**
- **Insert, find, update, and delete data** (CRUD)
- **Write advanced queries**: filtering, projections, sorting, pagination
- **Build aggregation pipelines** for analytics and reporting
- **Create and analyze indexes** to optimize query performance

---

## 🏗️ Setup & Installation

### 1. Prerequisites

- **Node.js** (v12+ recommended): [Download](https://nodejs.org/)
- **MongoDB**:
  - [Community Edition (local)](https://www.mongodb.com/try/download/community)
  - **OR** [MongoDB Atlas (cloud)](https://www.mongodb.com/cloud/atlas)

### 2. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-Olaweb24.git
cd mongodb-data-layer-fundamentals-and-advanced-techniques-Olaweb24
```

### 3. Install Node.js Dependencies

```bash
npm install
```

### 4. Configure MongoDB

- **Local MongoDB:** Make sure the service is running (`mongod`).
- **MongoDB Atlas:** Copy your connection string and update the `uri` variable in `insert_books.js` and `queries.js`.

### 5. Initialize the Database

Run the following to insert sample data:

```bash
node insert_books.js
```
This will populate the `plp_bookstore.books` collection with a variety of sample book documents.

---

## 💻 Script Descriptions

### `insert_books.js`
- **Purpose:** Populates the `books` collection with sample data. Drops the collection if it exists to prevent duplicates.
- **Customization:** Edit the `uri` variable to match your MongoDB setup.

### `queries.js`
- **Purpose:** Contains all required MongoDB queries, including CRUD, advanced queries, aggregation pipelines, and index operations.
- **How to Run:**  
  ```bash
  node queries.js
  ```
- **Structure:** Organized by task, with comments explaining each query.

### `examples/`
- Example scripts for connecting to MongoDB (`mongodb_connection_example.js`) and using the shell (`mongodb_shell_example.js`).

---

## 🔧 Troubleshooting

- **Cannot find module 'mongodb':**  
  Run `npm install mongodb` in your project directory.
- **Connection errors:**  
  - Ensure MongoDB is running (local) or your Atlas connection string is correct.
  - Verify your network/firewall settings (for Atlas).
- **For detailed setup help, see [`SETUP_INSTRUCTIONS.md`](./SETUP_INSTRUCTIONS.md).**

---

## 📸 Screenshots

1. Take a screenshot of your database and collections in MongoDB Compass or Atlas.
2. Save images in the `Mongodb-screenshot/` directory.
3. Ensure at least one screenshot displays your `books` collection and some sample data.

---

## ❓ Frequently Asked Questions

**Q: Can I use MongoDB Compass or mongosh instead of Node.js scripts?**  
A: Yes! Example shell scripts are provided in the `examples/` directory.

**Q: How do I change the database/collection names?**  
A: Update the `dbName` and `collectionName` variables in `insert_books.js` and `queries.js`.

**Q: Where do I put my queries?**  
A: In `queries.js`, grouped and commented by task.

**Q: What if I get stuck?**  
A: Double-check the [MongoDB Node.js Driver docs](https://www.mongodb.com/docs/drivers/node/current/) or ask for help in your PLP support channels.



---

## 📝 License

---

This repository is for educational use as part of the Power Learn Project (PLP) MERN Stack Development curriculum.
