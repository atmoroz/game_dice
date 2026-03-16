'use client';

import { useGameStore } from '@entities/game/model/store';
import { Box, Typography } from '@mui/material';
import { GameHistoryTable } from './GameHistoryTable';
import { GameHistoryHeader } from './GameHistoryHeader';

export const GameHistoryWidget = () => {
  const history = useGameStore(s => s.history);

  if (!history.length) {
    return (
      <Box
        sx={{
          width: 'full',
          mx: 'auto',
          mt: 4,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body2">No games yet</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        mx: 'auto',
        mt: 4,
        maxHeight: { xs: 'none', md: 320 },
        overflow: { xs: 'visible', md: 'auto' },
        borderTop: '1px solid',
      }}
    >
      <GameHistoryHeader />
      <GameHistoryTable history={history} />
    </Box>
  );
};
