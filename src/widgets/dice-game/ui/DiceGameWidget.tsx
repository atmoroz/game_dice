'use client';

import { useGameStore } from '@entities/game/model/store';
import { GameAlert } from '@entities/game/ui/GameAlert';
import { ResultField } from '@entities/game/ui/ResultField';
import { ConditionSelector } from '@features/choose-condition/ui/ConditionSelector';
import { PlayButton } from '@features/play-dice/ui/PlayButton';
import { Box, Collapse } from '@mui/material';
import { NumberSlider } from '@shared/ui/NumberSlider';
import { useEffect, useRef, useState } from 'react';

export const DiceGameWidget = () => {
  const history = useGameStore(s => s.history);
  const isRolling = useGameStore(s => s.isRolling);

  const [visible, setVisible] = useState(false);

  const lastGame = history[0];
  const shouldShowAlert = !!lastGame && !isRolling;

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!shouldShowAlert) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 0);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [shouldShowAlert]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          minHeight: 76,
          position: { xs: 'sticky', sm: 'static' },
          top: { xs: 16, md: 'auto' },
          zIndex: 10,
        }}
      >
        <Collapse in={visible}>
          <GameAlert type={history[0]?.isWin ? 'success' : 'error'} />
        </Collapse>
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
