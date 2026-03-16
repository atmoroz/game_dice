'use client';

import { useGameStore } from '@entities/game/model/store';
import { Button, Box } from '@mui/material';

export const PlayButton = () => {
  const playGame = useGameStore(state => state.playGame);
  const isRolling = useGameStore(state => state.isRolling);

  const handleClick = () => {
    playGame();
  };

  return (
    <Box sx={{ mt: 2, width: 320, mx: 'auto' }}>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        fullWidth
        disabled={isRolling}
        onClick={handleClick}
        sx={{
          height: 42,
          py: 1,
          px: 2.75,
        }}
      >
        {isRolling ? 'Rolling...' : 'PLAY'}
      </Button>
    </Box>
  );
};
