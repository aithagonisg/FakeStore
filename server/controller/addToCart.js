const Registration = require("../models/register");

const addToCart = async (req, res, next) => {
  let user = await Registration.findOne({ email: req.email });
  const result = await user.updateOne({ $push: { cart: req.body } });
  res.json(result);
};

const removeItemFromCart = async (req, res, next) => {
  let user = await Registration.findOne({ email: req.email });
  const result = await user.updateOne({ $pull: { cart: req.body } });
  res.json(result);
};
module.exports = { addToCart, removeItemFromCart };
