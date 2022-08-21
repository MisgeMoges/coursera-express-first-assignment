const express = require("express");
const leaderRouter = express.Router();
const {
  getAllLeaders,
  creatingNewLeaders,
  updatingLeaders,
  deletingLeaders,
  getSpecificLeader,
  creatingSpecificLeader,
  updatingSpecificLeader,
  deletingSpecificLeader,
} = require("./leaderController");

leaderRouter
  .route("/")
  .get(getAllLeaders)
  .post(creatingNewLeaders)
  .put(updatingLeaders)
  .delete(deletingLeaders);
leaderRouter
  .route("/:leaderId")
  .get(getSpecificLeader)
  .post(creatingSpecificLeader)
  .put(updatingSpecificLeader)
  .delete(deletingSpecificLeader);


  
module.exports = leaderRouter;
