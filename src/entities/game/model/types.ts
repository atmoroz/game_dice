export type GameCondition = 'over' | 'under';

export interface GameHistoryItem {
  id: string;
  time: string;
  guess: string;
  result: number;
  isWin: boolean;
}

export type GameStatus = 'idle' | 'rolling' | 'result';

export interface GameState {
  threshold: number;
  isRolling: boolean;
  condition: GameCondition;
  lastResult: number | null;
  history: GameHistoryItem[];
}

export interface GameActions {
  setThreshold: (value: number) => void;
  setCondition: (condition: GameCondition) => void;
  playGame: () => void;
  finishGame: () => void;
  resetHistory: () => void;
}

export type GameStore = GameState & GameActions;
