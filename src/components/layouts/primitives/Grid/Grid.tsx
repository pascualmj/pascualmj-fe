import React from 'react';
import { GridStyle as S } from './Grid.style';
import { StackProps } from 'components/layouts/primitives/Stack/Stack';

type GridProps = Pick<StackProps, 'gap' | 'children' | 'className'> & {
  cols?: number;
  minColumnWidth?: number;
};

export const Grid: React.FC<GridProps> = ({ children, ...props }) => {
  return <S.Grid props={props}>{children}</S.Grid>;
};
