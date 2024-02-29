const mongoose = require("mongoose");

const targetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    calories: {
      type: Number,
    },
    status: {
      type: String,
    },
    target_date: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Target = mongoose.model("Target", targetSchema);

module.exports = Target;
