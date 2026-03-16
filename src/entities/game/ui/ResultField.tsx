'use client';

import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGameStore } from '../model/store';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const ResultField = () => {
  const result = useGameStore(s => s.lastResult);
  const isRolling = useGameStore(s => s.isRolling);
  const finishGame = useGameStore(s => s.finishGame);

  const [displayValue, setDisplayValue] = useState<number | null>(null);
  const [preview, setPreview] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreview(Math.floor(Math.random() * 100) + 1);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isRolling) return;

    let current = 0;

    const interval = setInterval(() => {
      current = Math.floor(Math.random() * 100) + 1;
      setDisplayValue(current);
    }, 50);

    const timeout = setTimeout(() => {
      clearInterval(interval);

      setDisplayValue(result);

      finishGame();
    }, 800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isRolling]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: 320,
        height: 200,
        borderRadius: 1,
        backgroundColor: 'action.hover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: 96,
          fontWeight: 300,
          lineHeight: 1,
        }}
      >
        {displayValue || preview}
      </Typography>
      <Tooltip
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        enterTouchDelay={0}
        arrow
        title={
          <>
            Choose a number and predict if the dice roll will be higher or
            lower.
            <br />
            Dice generates a number between 1 and 100.
          </>
        }
      >
        <IconButton size="small">
          <HelpOutlineIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
