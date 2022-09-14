import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import AddressCards from "./AddressCards";

export default function AddressData({
  addressList,
  setSelectedAddress,
  selectedAddress,
}) {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select Address</FormLabel>
      <RadioGroup
        aria-label="address"
        name="address"
        value={value}
        onChange={handleChange}
      >
        {addressList.map((item) => (
          <FormControlLabel
            value="permanent"
            control={<Radio />}
            label={<AddressCards addressInfo={item} />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
