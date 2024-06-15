const express = require("express");
const Notes = require("../models/NotesModel");

const notesRouter = express.Router();

notesRouter.get("/", async (req, res) => {
  try {
    const data = await Notes.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

notesRouter.post("/create", async (req, res) => {
  try {
    const note = await Notes(req.body);
    await note.save();
    res.status(200).send(note);
  } catch (error) {
    console.log(error);
    res.send(500).send("Something went wrong");
  }
});

notesRouter.get("/:id", async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id);
    res.status(200).send(note);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

notesRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedNotes = await Notes.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(updatedNotes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

notesRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Notes.findByIdAndDelete({ _id: id });
    res.status(200).send("Note deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

module.exports = notesRouter;
