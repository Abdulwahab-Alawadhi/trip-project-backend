const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  bio: { type: String },
  image: { type: String },
  trips: [{ type: Schema.Types.ObjectId, ref: "Trip" }],
});

module.exports = model("User", UserSchema);
