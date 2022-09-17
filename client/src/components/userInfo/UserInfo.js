import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";
import { LogoutUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Tooltip } from "@material-ui/core";

export default function UserInfo({ info }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(LogoutUser());
    setAnchorEl(null);
  };
  const navigateToAccount = () => {
    setAnchorEl(null);
    history.push("/myaccount");
  };

  const navigateToProfile = () => {
    setAnchorEl(null);
    history.push("/profile");
  };
  return (
    <div style={{ display: "flex" }}>
      <Tooltip title={info?.firstName + " " + info?.lastName} aria-label="add">
        <div
          className="subCategory"
          style={{ color: "white", textDecoration: "none", width: "120px" }}
        >
          {info?.firstName + " " + info?.lastName}
        </div>
      </Tooltip>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "white", textDecoration: "none" }}
      >
        <AccountCircleIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        style={{ top: "32px" }}
      >
        <MenuItem onClick={navigateToProfile}>Profile</MenuItem>
        <MenuItem onClick={navigateToAccount}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
