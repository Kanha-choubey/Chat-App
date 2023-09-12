const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB Connected : ${connect.connection.host}`.red.bold.bgYellow
    );
  } catch (err) {
    console.log(`Error : ${err.message}`.white.bgRed);
    process.exit();
  }
};
module.exports = connectDB;
