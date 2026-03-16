import { GameHistoryItem } from '@entities/game/model/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

interface GameHistoryTableProps {
  history: GameHistoryItem[];
}

export const GameHistoryTable = ({ history }: GameHistoryTableProps) => {
  return (
    <Table
      sx={{
        borderCollapse: 'collapse',
      }}
    >
      <TableHead>
        <TableRow
          sx={{
            height: 56,
            borderBottom: '1px solid rgba(0,0,0,0.12)',
          }}
        >
          <TableCell
            sx={{
              fontWeight: 500,
              fontSize: 14,
              px: 2,
            }}
          >
            Time
          </TableCell>

          <TableCell
            sx={{
              fontWeight: 500,
              fontSize: 14,
              px: 2,
            }}
          >
            Guess
          </TableCell>

          <TableCell
            sx={{
              fontWeight: 500,
              fontSize: 14,
              px: 2,
            }}
          >
            Result
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {history.map(game => (
          <TableRow
            key={game.id}
            sx={{
              height: 32,
              borderBottom: '1px solid rgba(0,0,0,0.12)',
            }}
          >
            <TableCell sx={{ py: '6px', px: 2 }}>{game.time}</TableCell>

            <TableCell sx={{ py: '6px', px: 2 }}>{game.guess}</TableCell>

            <TableCell
              sx={{
                py: '6px',
                px: 2,
                color: game.isWin ? '#1B5E20' : '#C62828',
              }}
            >
              {game.result}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
