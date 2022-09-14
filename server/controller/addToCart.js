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
const addAddress = async (req, res) => {
  let user = await CartList.findOne({ email: req.email });
  const addList = user.address;
  const index = addList.findIndex(
    (item) => item.isPermanentAddress == req.body.isPermanentAddress
  );

  let result;
  if (index != -1) {
    addList[index] = req.body;
    result = await user.updateOne({
      $set: { address: addList },
    });
  } else {
    console.log(req.body);
    result = await user.updateOne({
      $push: { address: req.body },
    });
  }
  res.json(result);
};

const getCartAndOrdersList = async (req, res, next) => {
  let user = await CartList.findOne({ email: req.email });
  res.json({ cart: user });
};
module.exports = {
  addToCart,
  removeItemFromCart,
  getCartAndOrdersList,
  addAddress,
};
