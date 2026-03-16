'use client';

import { useGameStore } from '@entities/game/model/store';
import { GameCondition } from '@entities/game/model/types';
import { RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';

export const ConditionSelector = () => {
  const condition = useGameStore(state => state.condition);
  const setCondition = useGameStore(state => state.setCondition);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCondition(event.target.value as GameCondition);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 2,
      }}
    >
      <RadioGroup row value={condition} onChange={handleChange}>
        <FormControlLabel
          value="under"
          control={<Radio color="secondary" size="small" />}
          labelPlacement="start"
          label="Under"
        />

        <FormControlLabel
          value="over"
          control={<Radio color="secondary" size="small" />}
          labelPlacement="start"
          label="Over"
        />
      </RadioGroup>
    </Box>
  );
};
