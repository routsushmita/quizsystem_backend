const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: [
    {
      question: { type: String, require: [true, "please add question"] },
      option: {
        first: { type: String, require: [true, "please add option"] },
        second: { type: String, require: [true, "please add option"] },
        third: { type: String, require: [true, "please add option"] },
        forth: { type: String, require: [true, "please add option"] },
      },
      answer: { type: String, require: [true, "please add anser"] },
      difficultyLevel: { type: Number, require: [true, "please add anser"] },
    },
  ],
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  addedOn: { type: Number, default: Date.now() },
  updatedOn: { type: Number, default: Date.now() },
});

module.exports =
  mongoose.models.Question || mongoose.model("Question", QuestionSchema);
