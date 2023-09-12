const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userModel = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);
// userSchema.pre("save", async function (next) {
//   if (!this.modified) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this;
// });

const User = mongoose.model("User", userModel);
module.exports = User;
