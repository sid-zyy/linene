import mongoose from "mongoose";

//1- create schema
//2- create model from schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //gives timestamps in data
);

const Note = new mongoose.model("Note", noteSchema);

export default Note;
