import React from 'react';
import { StackStyle as S } from './Stack.style';
import { spaceSizes } from 'services/theme';

export type StackProps = {
  gap?: keyof typeof spaceSizes;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  inline?: boolean;
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
  splitAfterIdx?: number;
  stretch?: boolean;
  fitContent?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export const Stack: React.FC<StackProps> = ({ children, className, ...props }) => {
  return (
    <S.Stack props={props} className={className}>
      {children}
    </S.Stack>
  );
};

export const VStack: React.FC<Omit<StackProps, 'direction'>> = props => {
  return <Stack {...props} direction="column" />;
};

export const HStack: React.FC<Omit<StackProps, 'direction'>> = props => {
  return <Stack {...props} direction="row" />;
};
