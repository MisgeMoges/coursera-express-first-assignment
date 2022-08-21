const getAllPromotions = (req, res) => {
  res.status(200).send("I will send you all the promotions");
};

const creatingNewPromotions = (req, res) => {
  res.status(200).send("I will add new promotion to the list");
};
const updatingPromotions = (req, res) => {
  res.status(403).send("updating the promotions is not possible");
};
const deletingPromotions = (req, res) => {
  res.status(200).send("deleting all promotions");
};

//specific leader

const getSpecificPromotion = (req, res) => {
  res
    .status(200)
    .send(`I will send you a promotion with id: ${req.params.promotionId}`);
};
const creatingSpecificPromotion = (req, res) => {
  res.status(403).send("creating promotion with specific id is not supported");
};
const updatingSpecificPromotion = (req, res) => {
  res.status(200).send(`updating promotion with id: ${req.params.promotionId}`);
};
const deletingSpecificPromotion = (req, res) => {
  res.status(200).send(`deleting promotion with id: ${req.params.promotionId}`);
};





module.exports = {
  getAllPromotions,
  creatingNewPromotions,
  updatingPromotions,
  deletingPromotions,
  getSpecificPromotion,
  creatingSpecificPromotion,
  updatingSpecificPromotion,
  deletingSpecificPromotion,
};
