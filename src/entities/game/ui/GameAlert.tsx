'use client';

import { Alert, AlertTitle } from '@mui/material';

type GameAlertType = 'success' | 'error';

interface GameAlertProps {
  type: GameAlertType;
}

export const GameAlert = ({ type }: GameAlertProps) => {
  if (type === 'success') {
    return (
      <Alert
        severity="success"
        variant="filled"
        sx={{
          width: 'full',
          mx: 'auto',
          px: 2,
          py: '6px',
        }}
      >
        You won
      </Alert>
    );
  }

  return (
    <Alert
      severity="error"
      variant="filled"
      sx={{
        width: 'full',
        mx: 'auto',
        px: 2,
        py: '6px',
      }}
    >
      <AlertTitle>You lost</AlertTitle>
      Number was higher
    </Alert>
  );
};
