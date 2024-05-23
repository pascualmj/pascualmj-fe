import React, { useMemo } from 'react';
import { TextStyle as S } from './Text.style';
import { fontSizes, fontWeights, lineHeights, colors, fontFamilies } from 'services/theme';
import { Leaves } from 'types/UtilityTypes';

export type TextProps = {
  family?: keyof typeof fontFamilies;
  size?: keyof typeof fontSizes;
  weight?: keyof typeof fontWeights;
  lineHeight?: keyof typeof lineHeights;
  tag?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'right' | 'center';
  color?: Leaves<typeof colors>;
  ellipsis?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({ className, children, tag, ...props }) => {
  const T = useMemo(() => {
    switch (tag) {
      case 'p':
        return S.P;
      case 'h1':
        return S.H1;
      case 'h2':
        return S.H2;
      case 'h3':
        return S.H3;
      case 'h4':
        return S.H4;
      case 'h5':
        return S.H5;
      case 'h6':
        return S.H6;
      default:
        return S.Span;
    }
  }, [tag]);

  return (
    <T props={props} className={className}>
      {children}
    </T>
  );
};
