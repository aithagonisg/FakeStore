const CartList = require("../models/cartList");

const addToCart = async (req, res, next) => {
  let user = await CartList.findOne({ email: req.email });
  const result = await user.updateOne({ $push: { cart: req.body } });
  res.json(result);
};

const removeItemFromCart = async (req, res, next) => {
  let user = await CartList.findOne({ email: req.email });
  const result = await user.updateOne({ $pull: { cart: req.body } });
  res.json(result);
};
const getCartAndOrdersList = async (req, res, next) => {
  let user = await CartList.findOne({ email: req.email });
  res.json({ cart: user });
};
module.exports = { addToCart, removeItemFromCart, getCartAndOrdersList };
