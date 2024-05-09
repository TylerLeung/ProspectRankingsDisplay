import { Grid } from "@mui/material";

function GridHeader(){
    return(
        <Grid container spacing={0.5}>
        <Grid item xs={2}>
          <h2>#</h2>
        </Grid>
        <Grid item xs={2}>
          <h2>Position</h2>
        </Grid>
        <Grid item xs={2}>
          <h2>Player Name</h2>
        </Grid>
        <Grid item xs={2}>
          <h2>Team</h2>
        </Grid>
        <Grid item xs={2}>
          <h2>League</h2>
        </Grid>
        <Grid item container direction="column" xs={2}>
          <h2>Rating</h2> 
        </Grid>
      </Grid>
    );
}

export default GridHeader;