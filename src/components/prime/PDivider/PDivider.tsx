import React from 'react';
import { Divider, DividerProps } from 'primereact/divider';
import { PDividerStyle as S } from './PDivider.style';

export const PDivider = React.forwardRef<Divider, DividerProps>((props, ref) => {
  return <S.Divider {...props} ref={ref} />;
});
