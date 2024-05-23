import React from 'react';
import { TextLinkStyle as S } from './TextLink.style';
import { LinkProps } from 'react-router-dom';
import { useClassNames } from 'hooks/useClassNames';

type AsOptions = 'a' | 'Link';
const LinkTextDefault = 'a' as const;
type LinkTextDefaultAsType = typeof LinkTextDefault;

type LinkTextOwnProps<E extends AsOptions> = {
  children?: React.ReactNode;
  severity?: 'primary' | 'secondary' | 'dark' | 'invert';
  as?: E;
};

type LinkTextProps<E extends AsOptions> = LinkTextOwnProps<E> &
  Omit<E extends 'a' ? React.ComponentProps<'a'> : LinkProps, keyof LinkTextOwnProps<E>>;

export const TextLink = <E extends AsOptions = LinkTextDefaultAsType>({
  children,
  severity,
  as,
  disabled,
  ...otherProps
}: LinkTextProps<E> & { disabled?: boolean }) => {
  const variant = as;
  const linkTextClassNames = useClassNames(
    {
      [`link-text-${severity || 'primary'}`]: true,
    },
    otherProps.className
  );

  return disabled ? (
    <S.Disabled className={linkTextClassNames}>{children}</S.Disabled>
  ) : variant === 'Link' ? (
    <S.RouterLink to="/" {...otherProps} className={linkTextClassNames}>
      {children}
    </S.RouterLink>
  ) : (
    <S.NativeAnchor {...otherProps} className={linkTextClassNames}>
      {children}
    </S.NativeAnchor>
  );
};
