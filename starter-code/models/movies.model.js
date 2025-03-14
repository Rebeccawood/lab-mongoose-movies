const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String
}, {
  timestamps: true
});

const Movies = mongoose.model("movies", movieSchema);

module.exports = Movies;
