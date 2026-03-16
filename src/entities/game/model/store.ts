import { create } from 'zustand';
import { GameStore, GameCondition } from './types';
import { generateDiceNumber } from '@shared/lib/random';
import { persist } from 'zustand/middleware';

// Maximum number of games stored in history
const MAX_HISTORY = 10;

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      threshold: 50,
      condition: 'over',
      isRolling: false,
      lastResult: null,
      history: [],

      setThreshold: value => set({ threshold: value }),
      setCondition: (condition: GameCondition) => set({ condition }),

      playGame: () => {
        // Generate random dice value (1–100)
        const result = generateDiceNumber();

        // Start rolling animation and store generated result
        set({
          isRolling: true,
          lastResult: result,
        });
      },
      finishGame: () => {
        const { history, lastResult, threshold, condition } = get();

        // Safety check (should never happen)
        if (lastResult === null) return;

        // Determine if player prediction was correct
        const isWin =
          condition === 'over'
            ? lastResult > threshold
            : lastResult < threshold;

        const newItem = {
          id: crypto.randomUUID(),
          time: new Date().toLocaleTimeString(),
          guess: `${condition} ${threshold}`,
          result: lastResult,
          isWin,
        };

        set({
          isRolling: false,
          // Keep only the last MAX_HISTORY games
          history: [newItem, ...history].slice(0, MAX_HISTORY),
        });
      },
      resetHistory: () => set({ history: [] }),
    }),
    {
      name: 'dice-game-history',
      partialize: state => ({
        history: state.history,
      }),
    },
  ),
);
