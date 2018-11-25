const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient();

// function indexRoute(req, res, next) {
//   Journey
//     .find()
//     .sort({ name: 1 })
//     .exec()
//     .then(journeys => res.json(journeys))
//     .catch(next); // send errors to errorHandler
// }
//
// function showRoute(req, res, next) {
//   Journey
//     .findById(req.params.id)
//     .populate('trophyWin user tasks.painting')
//     .exec()
//     .then(journey => {
//       if(!journey) throw new Error('Not Found'); // create a custom error
//       return res.json(journey);
//     })
//     .catch(next);
// }

//  this function get object with paintingId and url of photo,
// and return if the photo include the painting.
// req: { paintingId: '<the id of object painting>',
//        photoUrl: '<the url of photo>' }
function showRoute(req, res, next) {
  console.log(req.body);
  client
    // .logoDetection(req.body.photoUrl)
    .webDetection(req.body.photoUrl)
    .then(results => {
      // return results[0].logoAnnotations.map(e => e.description);
      return results[0].webDetection;
      // return Painting
      //   .findById(req.body.paintingId)
      //   .then(painting => {
      //     const isMatch = tags.indexOf(painting.title) > -1;
      //     return { isMatch, tags };
      //   });
    })
    .then((labels) => res.status(201).json(labels))
    .catch(next);
}

module.exports = {
  scanner: showRoute
};
