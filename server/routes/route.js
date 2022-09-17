const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../jwtUtils/jwt");
const products = require("../controller/products");
const register = require("../controller/registration");
const login = require("../controller/login");
const {
  addToCart,
  removeItemFromCart,
  getCartAndOrdersList,
  addAddress,
  addCardDetails,
  placeOrder,
} = require("../controller/addToCart");

const {
  changePassword,
  updateUserInfo,
} = require("../controller/updateUserInfo");

router.get("/products", products);

router.post("/register", register);

router.post("/login", login);

router.post("/addtocart", authenticateToken, addToCart);

router.post("/removefromcart", authenticateToken, removeItemFromCart);

router.post("/addaddress", authenticateToken, addAddress);

router.post("/addcarddetails", authenticateToken, addCardDetails);

router.post("/placeOrder", authenticateToken, placeOrder);

router.post("/changepassword", authenticateToken, changePassword);

router.post("/updateuserinfo", authenticateToken, updateUserInfo);

router.post("/getCartAndOrderList", authenticateToken, getCartAndOrdersList);

module.exports = router;
