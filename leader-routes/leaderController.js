const getAllLeaders = (req, res) => {
  res.status(200).send("I will send you all the leaders");
};

const creatingNewLeaders = (req, res) => {
  res.status(200).send("I will add new leader to the list");
};
const updatingLeaders = (req, res) => {
  res.status(403).send("updating the leaders is not possible");
};
const deletingLeaders = (req, res) => {
  res.status(200).send("deleting all leaders");
};

//specific leader

const getSpecificLeader = (req, res) => {
  res
    .status(200)
    .send(`I will send you a leader with id: ${req.params.leaderId}`);
};
const creatingSpecificLeader = (req, res) => {
  res.status(403).send("creating leader with specific id is not supported");
};
const updatingSpecificLeader = (req, res) => {
  res.status(200).send(`updating leader with id: ${req.params.leaderId}`);
};
const deletingSpecificLeader = (req, res) => {
  res.status(200).send(`deleting leader with id: ${req.params.leaderId}`);
};

module.exports = {
  getAllLeaders,
  creatingNewLeaders,
  updatingLeaders,
  deletingLeaders,
  getSpecificLeader,
  creatingSpecificLeader,
  updatingSpecificLeader,
  deletingSpecificLeader,
};
