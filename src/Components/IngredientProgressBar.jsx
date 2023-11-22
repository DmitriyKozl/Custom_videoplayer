/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CustomSlider from "./CustomSlider";

function IngredientProgressBar() {
  const [playerState, setPlayerState] = useState({
    playing: false,
    muted: true,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
  });
  const playerRef = useRef(null);

  const handlePlay = () => setPlayerState({ ...playerState, playing: true });
  const handlePause = () => setPlayerState({ ...playerState, playing: false });
  const handlePlayerSeek = (e, newValue) => {
    setPlayerState({ ...playerState, seeking: true, played: parseFloat(newValue / 100) });
    playerRef.current.seekTo(parseFloat(newValue / 100));

  };
  
  const handlePlayerMouseSeekUp = (e, newValue) => {
    setPlayerState({ ...playerState, seeking: true });
    playerRef.current.seekTo(parseFloat(newValue / 100), 'fraction');
  };

  const handlePlayerProgress = (state) => {
    if (!playerState.seeking) {
      setPlayerState({ ...playerState, ...state });
    }
  };


  return (

<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  className="duration__container"

>
<Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          xs={2}
          sm={2}
          style={{ padding: 0 }}
        >
    
          <Grid item>
          <Typography color={"black"}>Lorem Ipsum</Typography>

          </Grid>
        </Grid>
    <CustomSlider className="duration__bar" />
</Grid>

  );
}

export default IngredientProgressBar;