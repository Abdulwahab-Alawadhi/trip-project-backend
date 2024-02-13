const upload = require("../../middlewares/multer");
const {
  getAllTrips,
  createTrip,
  fetchTrip,
  deleteTrip,
  updateTrip,
} = require("./controllers");
const express = require("express");
const router = express.Router();

router.get("/trips", getAllTrips);

// TOKEN JWT
router.post("/trips", upload.single("image"), createTrip);

router.put("/trips/:_id", updateTrip);

router.delete("/trips/:_id", deleteTrip);

router.get("/trips/:_id", fetchTrip);

module.exports = router;
