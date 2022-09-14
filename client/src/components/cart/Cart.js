import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { useDispatch } from "react-redux";
import { genetateImages } from "../images/generateImages";
import { RemoveItemFromCart } from "../../redux/actions";

import "./Cart.css";
import { useHistory } from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    paddingTop: 4,
  },
}));

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const totalAmount = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.productDetails.price,
    0
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNagivateToCartPage = () => {
    setAnchorEl(null);
    history.push({
      pathname: "/cartList",
    });
    //navigate to cart page
  };

  const removeFromCart = (cardInfo) => {
    handleClose();
    dispatch(RemoveItemFromCart(cardInfo));
  };

  return (
    <div style={{ color: "white", textDecoration: "none", cursor: "pointer" }}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <StyledBadge
          badgeContent={cart.length}
          color="secondary"
          overlap="rectangular"
        >
          <ShoppingCartIcon style={{ color: "white" }} />
        </StyledBadge>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <List className={classes.root}>
          <ListItem style={{ paddingTop: "0px" }}>
            <ListItemText primary="Image" style={{ paddingRight: "20px" }} />
            <ListItemText primary="Name" style={{ paddingRight: "20px" }} />
            <ListItemText primary="Price" />
          </ListItem>
          <Divider component="li" />
          {/* map the list cart  here*/}
          {cart.map((item, index) => (
            <Fragment key={index}>
              <ListItem>
                <ListItemAvatar style={{ minWidth: "86px" }}>
                  <img
                    src={genetateImages[item.image]}
                    style={{ width: "30px", height: "30px" }}
                    alt=""
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.product_name}
                  className="product_name"
                />
                <ListItemText
                  primary={item.productDetails.price}
                  className="product_name"
                />
                <DeleteIcon
                  color="secondary"
                  style={{ cursor: "pointer" }}
                  onClick={() => removeFromCart(item)}
                />
              </ListItem>
              <Divider component="li" />
            </Fragment>
          ))}
          <ListItem style={{ paddingTop: "0px" }}>
            <ListItemText
              primary="Total Amount"
              style={{ paddingRight: "60px" }}
            />
            <ListItemText primary={totalAmount} />
          </ListItem>
          <Divider component="li" />
          <ListItem
            style={{
              height: "15px",
              paddingTop: "15px",
              cursor: "pointer",
            }}
            onClick={handleNagivateToCartPage}
          >
            <ListAltIcon />
            <ListItemText primary="Cart List" />
          </ListItem>
        </List>
      </StyledMenu>
    </div>
  );
}
