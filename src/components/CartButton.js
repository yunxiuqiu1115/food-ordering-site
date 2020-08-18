import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CardButton } from "../style/styled";
import { ListItem } from "@material-ui/core";

const CartButton = ({ foodID, price, name, labelName }) => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleSubmit = () => {
    let foodList = JSON.parse(window.localStorage.getItem("foodList")) || {};
    const foodItem = "foodID" + foodID;
    let original;
    if (foodList.hasOwnProperty(foodItem)) {
      original = foodList[foodItem].amount;
    } else {
      let property = {};
      property.id = foodID;
      property.price = price;
      property.name = name;
      foodList[foodItem] = property;
      original = "0";
    }

    const newCount = selectedIndex + 1 + parseInt(original);
    foodList[foodItem].amount = newCount;
    window.localStorage.setItem("foodList", JSON.stringify(foodList));
    setOpen(false);
  };

  return (
    <div>
      <CardButton type="button" onClick={() => setOpen(true)}>
        {labelName}
      </CardButton>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add your order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please choose the number you want to order:
          </DialogContentText>
          <List component="nav" aria-label="order-amount">
            <ListItem
              button
              aria-haspopup="true"
              aria-label="Please choose your order"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <ListItemText
                primary="You Order"
                secondary={options[selectedIndex]}
              />
            </ListItem>
          </List>
          <Menu
            id="order-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            elevation={20}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: 150,
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Order
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CartButton;
