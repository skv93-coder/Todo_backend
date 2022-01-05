const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: String,
  status: { type: String, default: "pending", enum: ["pending", "done"] },
});

module.exports = mongoose.model("Todo", todoSchema);
