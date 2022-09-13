import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { genetateImages } from "../images/generateImages";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3];

export default function ProductDescription() {
  const history = useHistory();
  const prod = useSelector((state) => state.products);
  const [cardInfo, setCardInfo] = useState({});

  useEffect(() => {
    const id = window.location.search.split("=")[1];
    const cardInfo_store = prod.filter((item) => item._id === id);
    if (!cardInfo) {
      history.push("/");
    } else {
      setCardInfo(cardInfo_store[0]);
    }
  }, [prod]);

  const classes = useStyles();

  return (
    <React.Fragment>
      {!prod.length > 0 ? (
        <Redirect to="/" />
      ) : (
        <>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar style={{ minHeight: "48px" }}>
              <Typography variant="h4" color="inherit" noWrap>
                {cardInfo?.product_category} Details
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            <div className={classes.heroContent}>
              <Container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "450px",
                }}
              >
                <img
                  style={{ width: "450px" }}
                  src={genetateImages[cardInfo.image]}
                />
              </Container>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h4"
                  color="textPrimary"
                  gutterBottom
                >
                  ProductName: {cardInfo?.product_name}
                </Typography>
                <Typography variant="h5" color="textSecondary" paragraph>
                  Description: {cardInfo?.productDetails?.Description}
                </Typography>
                <Typography variant="h5" color="textSecondary" paragraph>
                  Inches : {cardInfo?.productDetails?.inches}
                </Typography>
                <Typography variant="h5" color="textSecondary" paragraph>
                  Price : {cardInfo?.productDetails?.price}
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Button variant="contained" color="primary">
                        Add To Cart
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="secondary">
                        Buy Now
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
              <Typography
                component="h1"
                variant="h4"
                color="textPrimary"
                gutterBottom
              >
                Recently Ordered Details
              </Typography>
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to
                          describe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
        </>
      )}
    </React.Fragment>
  );
}
