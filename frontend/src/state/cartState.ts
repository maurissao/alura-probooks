// cartState.ts
import { atom } from 'recoil';

export const cartState = atom<number>({
  key: 'cartState',
  default: 0,
});
