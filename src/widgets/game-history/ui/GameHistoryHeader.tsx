import { ClearHistoryButton } from '@features/clear-history/ui/ClearHistoryButton';
import { Box, Typography } from '@mui/material';

export const GameHistoryHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="subtitle1" fontWeight={500}>
        Game history
      </Typography>

      <ClearHistoryButton />
    </Box>
  );
};
