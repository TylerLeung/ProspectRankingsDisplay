import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { Grid, Rating } from "@mui/material";
import TextField from '@mui/material/TextField';


const StyledRatingRed = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff3d47",
  },
  "& .MuiRating-iconHover": {
    color: "#ff6d75",
  },
});

const StyledRatingGreen = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00B050",
  },
  "& .MuiRating-iconHover": {
    color: "#00781a",
  },
});

function GridSheet() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedComponent, setSelectedComponent] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (component) => {
    setSelectedComponent(component);
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Grid container spacing={0.5}>
        <Grid item xs={2}>
        <TextField id="standard-basic" sx={{input: {textAlign: "center"}}} variant="standard" />
        </Grid>
        <Grid item xs={2}>
        <TextField id="standard-basic" sx={{input: {textAlign: "center"}}} variant="standard" />
        </Grid>
        <Grid item xs={2}>
        <TextField id="standard-basic" sx={{input: {textAlign: "center"}}} fullWidth variant="standard" />
        </Grid>
        <Grid item xs={2}>
        <TextField id="standard-basic" sx={{input: {textAlign: "center"}}} variant="standard" />
        </Grid>
        <Grid item xs={2}>
        <TextField id="standard-basic" sx={{input: {textAlign: "center"}}} variant="standard" />
        </Grid>
        <Grid item xs={2}>
        {selectedComponent && selectedComponent}   
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            ▼
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleMenuItemClick(<StyledRatingRed precision={0.5} />)}>Red</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick(<Rating precision={0.5} />)}>Yellow</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick(<StyledRatingGreen precision={0.5} />)}>Green</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </div>
  );
}

export default GridSheet;
