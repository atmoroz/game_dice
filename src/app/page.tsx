import { Box } from '@mui/material';
import { DiceGameWidget } from '@widgets/dice-game/ui/DiceGameWidget';
import { GameHistoryWidget } from '@widgets/game-history/ui/GameHistoryWidget';

export default function HomePage() {
  return (
    <Box sx={{ px: 2, maxWidth: 600, mx: 'auto', mt: 2 }}>
      <DiceGameWidget />
      <GameHistoryWidget />
    </Box>
  );
}
