import { Context, useContext } from 'react';
import { BLoCBase } from '../types/BLoCBase';

export const useBLoC = <T extends BLoCBase<any>>(context: Context<Readonly<T>>) =>
  useContext<Omit<T, 'onInit' | 'onDestroy'>>(context as any);
