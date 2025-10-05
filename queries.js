// queries.js - MongoDB CRUD and advanced queries
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const dbName = 'plp_bookstore';
const collectionName = 'books';

async function runQueries() {
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db(dbName);
  const books = db.collection(collectionName);

  // 🟢 Find all books in a specific genre
  console.log("\n📚 Books in Fiction genre:");
  console.log(await books.find({ genre: "Fiction" }).toArray());

  // 🟢 Find books published after a certain year
  console.log("\n📖 Books published after 1950:");
  console.log(await books.find({ published_year: { $gt: 1950 } }).toArray());

  // 🟢 Find books by a specific author
  console.log("\n👨‍💻 Books by George Orwell:");
  console.log(await books.find({ author: "George Orwell" }).toArray());

  // 🟠 Update the price of a specific book
  console.log("\n💲 Updating price of '1984'...");
  await books.updateOne({ title: "1984" }, { $set: { price: 15.99 } });
  console.log("Updated:", await books.findOne({ title: "1984" }));

  // 🔴 Delete a book by its title
  console.log("\n🗑️ Deleting 'The Hobbit'...");
  await books.deleteOne({ title: "The Hobbit" });
  console.log("Deleted. Remaining count:", await books.countDocuments());

  // 🧠 Advanced Queries

  // 1️⃣ Books that are in stock and published after 2010
  console.log("\n📗 In-stock books published after 2010:");
  console.log(await books.find({ in_stock: true, published_year: { $gt: 2010 } }).toArray());

  // 2️⃣ Projection: only title, author, and price
  console.log("\n🎯 Projected fields (title, author, price):");
  console.log(await books.find({}, { projection: { title: 1, author: 1, price: 1, _id: 0 } }).toArray());

  // 3️⃣ Sorting: by price (ascending)
  console.log("\n⬆️ Books sorted by price (ascending):");
  console.log(await books.find().sort({ price: 1 }).toArray());

  // 4️⃣ Sorting: by price (descending)
  console.log("\n⬇️ Books sorted by price (descending):");
  console.log(await books.find().sort({ price: -1 }).toArray());

  // 5️⃣ Pagination (5 per page)
  console.log("\n📄 Page 1 (first 5 books):");
  console.log(await books.find().limit(5).toArray());

  console.log("\n📄 Page 2 (next 5 books):");
  console.log(await books.find().skip(5).limit(5).toArray());

  // 🧮 Aggregation Pipelines

  // Average price by genre
  console.log("\n💰 Average price by genre:");
  console.log(await books.aggregate([
    { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
  ]).toArray());

  // Author with the most books
  console.log("\n👑 Author with the most books:");
  console.log(await books.aggregate([
    { $group: { _id: "$author", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 1 }
  ]).toArray());

  // Group by publication decade
  console.log("\n📆 Books grouped by decade:");
  console.log(await books.aggregate([
    { $addFields: { decade: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } } },
    { $group: { _id: "$decade", count: { $sum: 1 } } },
    { $sort: { _id: 1 } }
  ]).toArray());

  // ⚡ Indexing

  await books.createIndex({ title: 1 });
  console.log("\n🔍 Created index on title");

  await books.createIndex({ author: 1, published_year: 1 });
  console.log("🔍 Created compound index on author + published_year");

  // Use explain() to compare performance
  console.log("\n📊 Explain query performance:");
  const explainResult = await books.find({ title: "1984" }).explain("executionStats");
  console.log(JSON.stringify(explainResult.executionStats, null, 2));

  await client.close();
  console.log("\nConnection closed");
}

runQueries().catch(console.error);
