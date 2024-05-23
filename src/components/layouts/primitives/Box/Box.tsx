import React from 'react';
import { BoxStyle as S } from './Box.style';
import { borderSizes, colors, paddingSizes, radiusSizes } from 'services/theme';
import { Leaves } from 'types/UtilityTypes';

type BoxProps = {
  padding?: keyof typeof paddingSizes | (keyof typeof paddingSizes)[];
  borderWidth?: keyof typeof borderSizes;
  borderColor?: Leaves<typeof colors>;
  backgroundColor?: Leaves<typeof colors>;
  radius?: keyof typeof radiusSizes;
  elevation?: number;
  stretch?: boolean;
  fitContent?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export const Box: React.FC<BoxProps> = ({ children, className, ...props }) => {
  return (
    <S.Box props={props} className={className}>
      {children}
    </S.Box>
  );
};
