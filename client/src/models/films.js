var Film = require("./film.js");
var Review = require("./review.js")
var filmRouter = new express.Router();

var films = [film1, film2, film3];

filmRouter.get('/:id', function(req, res){
  var index = req.params.id;
  res.json({data: films[index]});
});

var addFilm = function(film){
  var newFilm = new Film({
    title: "Evil Dead",
    actors: ["Jia"]
  });
}

filmRouter.put('/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json(films);
});

filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});

var Films = function(){

  // var review1 = new Review({
  //   comment: "It's not even a thing. What just happened. I want my life back.",
  //   rating: 1,
  //   author: "Val"
  // });

  // var review2 = new Review({
  //   comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
  //   rating: 100,
  //   author: "Val"
  // });

  // var review3 = new Review({
  //   comment: "Uhhh...produced by aliens",
  //   rating: 1,
  //   author: "Dumdum"
  // })

  // var film1 = new Film({
  //   title: "Now You See Me",
  //   actors: ["Woody Harrelson", "Jesse Eisenberg"]
  // });

  // var film2 = new Film({
  //   title: "Star Wars Episode IV: A New Hope",
  //   actors: ["Harrison Ford", "Alec Guiness"]
  // });

  // var film3 = new Film({
  //   title: "The Room",
  //   actors: ["Tommy Wiseau", "Greg Sestero"]
  // });

  // film1.addReview(review1);
  // film2.addReview(review2);
  // film3.addReview(review3);


  return films;
}

module.exports = Films;