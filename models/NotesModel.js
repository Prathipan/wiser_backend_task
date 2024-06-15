const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
    },
    isPinned : {
      type : Boolean,
      default : false
    }
  },
  { collection: "Notes", timestamps: true }
);

module.exports = mongoose.model("Notes", NoteSchema);
