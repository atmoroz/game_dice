'use client';

import { useGameStore } from '@entities/game/model/store';
import { GameAlert } from '@entities/game/ui/GameAlert';
import { ResultField } from '@entities/game/ui/ResultField';
import { ConditionSelector } from '@features/choose-condition/ui/ConditionSelector';
import { PlayButton } from '@features/play-dice/ui/PlayButton';
import { Box } from '@mui/material';
import { NumberSlider } from '@shared/ui/NumberSlider';

export const DiceGameWidget = () => {
  const history = useGameStore(s => s.history);
  const isRolling = useGameStore(s => s.isRolling);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ minHeight: 76 }}>
        {history.length > 0 && !isRolling && (
          <GameAlert type={history[0].isWin ? 'success' : 'error'} />
        )}
      </Box>

      <Box sx={{ mt: '21px', display: 'flex', justifyContent: 'center' }}>
        <ResultField />
      </Box>

      <ConditionSelector />

      <Box sx={{ mt: 4 }}>
        <NumberSlider />
      </Box>

      <PlayButton />
    </Box>
  );
};
