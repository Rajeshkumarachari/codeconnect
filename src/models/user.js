const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      minLength: 4,
      maxLength: 30,
      trim: true,
    },
    lastName: { type: String, trim: true },
    emailId: { type: String, require: true, unique: true, trim: true },
    password: { type: String, require: true, minLength: 8, trim: true },
    age: { type: Number, min: 10, trim: true },
    gender: {
      type: String,
      lowercase: true,
      validate(value) {
        if (!["male", "female", "others"].includes(value))
          throw new Error("Gender data is not valid");
      },
    },
    photoUrl: {
      type: String,
      default:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
    },
    about: {
      type: String,
      default: "This is a default about the user",
      trim: true,
      maxLength: 500,
    },
    skill: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
