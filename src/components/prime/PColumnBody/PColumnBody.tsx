import React from 'react';
import { PSkeleton } from '../PSkeleton/PSkeleton';

export const PColumnBody: React.FC<{ loading?: boolean; children?: React.ReactNode | string }> = ({
  loading,
  children,
}) => {
  return loading ? <PSkeleton height="14px" /> : <>{children !== undefined ? children : null}</>;
};
