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
} = require("../controller/addToCart");

router.get("/products", products);

router.post("/register", register);

router.post("/login", login);

router.post("/addtocart", authenticateToken, addToCart);

router.post("/removefromcart", authenticateToken, removeItemFromCart);

router.post("/getCartAndOrderList", authenticateToken, getCartAndOrdersList);

module.exports = router;
