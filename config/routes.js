const router = require('express').Router();
const scannerController = require('../controllers/scanner');


router.route('/scanner')
  .post(scannerController.scanner);

// router.route('/journeys/:id')
//   .get(journeysController.show);


router.route('/*')
  .all((req, res) => res.sendStatus(404));

module.exports = router;
