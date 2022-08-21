const express = require("express");
const promotionRouter = express.Router();

const {
  getAllPromotions,
  creatingNewPromotions,
  updatingPromotions,
  deletingPromotions,
  getSpecificPromotion,
  creatingSpecificPromotion,
  updatingSpecificPromotion,
  deletingSpecificPromotion,
} = require("./promoController");

promotionRouter
  .route("/")
  .get(getAllPromotions)
  .post(creatingNewPromotions)
  .put(updatingPromotions)
  .delete(deletingPromotions);
  promotionRouter
  .route("/:promotionId")
  .get(getSpecificPromotion)
  .post(creatingSpecificPromotion)
  .put(updatingSpecificPromotion)
  .delete(deletingSpecificPromotion);

module.exports = promotionRouter;

