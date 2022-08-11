const Registration = require("../models/register");
const { generateAccessToken } = require("../jwtUtils/jwt");

const register = async (req, res, next) => {
  const body = {
    ...req.body,
    cart: [],
  };
  let user = await Registration.findOne({ email: req.body.email });
  if (user) {
    res.status(401).json("User already exist please login");
  } else {
    try {
      user = new Registration(body);
      await user.save();
      const token = await generateAccessToken(req.body.email);
      const response = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        cart: user.cart,
        token: token,
      };
      res.status(200).json(response);
    } catch {
      res.status(500).send("some thing went wrong");
    }
  }
};

module.exports = register;
