import React from 'react';
import { ScrollerStyle as S } from './Scroller.style';

type ScrollerProps = {
  axis?: 'y' | 'x';
  className?: string;
  children?: React.ReactNode;
};

export const Scroller: React.FC<ScrollerProps> = ({ className, children, ...props }) => {
  return (
    <S.Scroller props={props} className={className}>
      {children}
    </S.Scroller>
  );
};
