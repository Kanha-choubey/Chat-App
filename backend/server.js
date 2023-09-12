const express = require("express");
const chats = require("./data/data");
const connectDB = require("./config/db");
require("dotenv").config();
const colors = require("colors");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const PORT = process.env.PORT || 5000;
const app = express();

// Connect Data Base
connectDB();
// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("API is Running");
});
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/chat", require("./routes/chatRoute"));
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, console.log(`server is started on : ${PORT}`.bgGreen));
