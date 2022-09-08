import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Divider } from "@material-ui/core";
import { genetateImages } from "../images/generateImages";
import { addToCartList, getCartAndOrdersList } from "../../services/Authsevice";
import { setCartData, setOrdersData } from "../../redux/actions";

const useStyles = makeStyles({
  root: {
    width: 378,
    margin: 10,
    height: 349,
  },
  media: {
    height: 175,
  },
  divide: {
    background: "#ff9800",
    marginBottom: 2,
    height: 2,
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
  },
});

export default function ProductCard({ cardInfo }) {
  const { image, productDetails, product_category, product_name } = cardInfo;

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChangePage = (cardInfo) => {
    history.push({
      pathname: "/description",
      search: `?id=${cardInfo._id}`,
    });
  };

  const addToCart = (cardInfo) => {
    addToCartList(cardInfo)
      .then((res) => res.json())
      .then((item) =>
        getCartAndOrdersList()
          .then((res) => res.json())
          .then((data) => {
            dispatch(setCartData(data.cart.cart));
            dispatch(setOrdersData(data.cart.orders));
          })
      );
  };
  return (
    <Card className={classes.root} key={product_name}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={genetateImages[image]}
          title="Contemplative Reptile"
          onClick={() => handleChangePage(cardInfo)}
        />
        <Divider variant="middle" className={classes.divide} />
        <CardContent>
          <div className={classes.content}>
            <div>
              <Typography variant="h4" component="h2">
                {product_category}
              </Typography>
            </div>
            <div>
              <Typography variant="h5" component="h4">
                {product_name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="subCategory"
              >
                {productDetails.Description}
              </Typography>
            </div>
          </div>
          <Typography variant="h5" component="h4">
            &#8377;
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3,
            }).format(productDetails.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "10px", borderTop: "1px solid black" }}
        onClick={() => addToCart(cardInfo)}
      >
        Add To Cart
      </Button>
    </Card>
  );
}
