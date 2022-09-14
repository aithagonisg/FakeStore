import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { genetateImages } from "../images/generateImages";
import DeleteIcon from "@material-ui/icons/Delete";
import { RemoveItemFromCart } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { currencyFormat } from "../../utils/currencyFormat";
import { Link } from "react-router-dom";
import { cartTotal } from "../../utils/cartTotal";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ListTable({ rows }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const removeFromCart = (cardInfo) => {
    dispatch(RemoveItemFromCart(cardInfo));
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Product Category</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Inches</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rows || []).map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <img
                  src={genetateImages[row.image]}
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                />
              </TableCell>
              <TableCell>{row.product_category}</TableCell>
              <TableCell>{row.product_name}</TableCell>
              <TableCell>{row.productDetails.Description}</TableCell>
              <TableCell>{row.productDetails.inches}</TableCell>
              <TableCell>
                &#8377;{currencyFormat(row.productDetails.price)}
              </TableCell>
              <TableCell>
                <DeleteIcon
                  color="secondary"
                  style={{ cursor: "pointer" }}
                  onClick={() => removeFromCart(row)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "50px",
          marginRight: "150px",
          alignItems: "center",
        }}
      >
        <div>
          <Link to="/checkout">
            <Button variant="contained" color="primary">
              Checkout
            </Button>
          </Link>
        </div>
        <div>
          <Typography variant="h4">Total Amount</Typography>
        </div>
        <div>
          <Typography variant="h5">
            &#8377;
            {currencyFormat(cartTotal(rows))}
          </Typography>
        </div>
      </div>
    </TableContainer>
  );
}
