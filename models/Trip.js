const { model, Schema } = require("mongoose");

const TripSchema = new Schema({
  title: String,
  image: String,
  destination: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Trip", TripSchema);
