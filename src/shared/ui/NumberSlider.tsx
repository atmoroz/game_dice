'use client';

import { useGameStore } from '@entities/game/model/store';
import { Slider, Box } from '@mui/material';

export const NumberSlider = () => {
  const threshold = useGameStore(state => state.threshold);
  const setThreshold = useGameStore(state => state.setThreshold);

  const handleChange = (_: Event, value: number | number[]) => {
    const v = value as number;

    const clamped = Math.min(99, Math.max(1, v));
    setThreshold(clamped as number);
  };

  const marks = [
    { value: 0, label: '0' },
    { value: 20 },
    { value: 40 },
    { value: 60 },
    { value: 80 },
    { value: 100, label: '100' },
  ];

  return (
    <Box sx={{ width: 320, height: '62px', mx: 'auto' }}>
      <Slider
        size="small"
        color="secondary"
        value={threshold}
        onChange={handleChange}
        min={0}
        max={100}
        step={1}
        valueLabelDisplay="on"
        marks={marks}
        sx={{
          '& .MuiSlider-mark': {
            width: 4,
            height: 4,
            borderRadius: '50%',
          },
        }}
      />
    </Box>
  );
};
