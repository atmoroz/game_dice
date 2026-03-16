'use client';

import { IconButton, Tooltip } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useGameStore } from '@entities/game/model/store';

export const ClearHistoryButton = () => {
  const resetHistory = useGameStore(s => s.resetHistory);
  const history = useGameStore(s => s.history);

  if (!history.length) return null;

  return (
    <Tooltip title="Clear history">
      <IconButton size="small" onClick={resetHistory}>
        <DeleteOutlineIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};
