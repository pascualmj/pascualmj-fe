import { Button, ButtonProps } from 'primereact/button';
import React, { useMemo } from 'react';
import { PButtonStyle as S } from './PButton.style';
import { useClassNames } from 'hooks/useClassNames';

export type PButtonCustomProps = {
  variant?: 'secondary' | 'tertiary' | 'link' | 'dark';
  iconOnly?: boolean;
};

export type PButtonProps = Omit<ButtonProps, 'severity'> & PButtonCustomProps;

export const PButton = React.forwardRef<Button, PButtonProps>((props, ref) => {
  const cleanProps = useMemo(() => (({ severity, iconOnly, ...o }: any) => o)(props), [props]);
  const classNames = useClassNames(
    {
      'button-variant-secondary': props.variant === 'secondary',
      'button-variant-tertiary': props.variant === 'tertiary',
      'button-variant-link': props.variant === 'link',
      'button-variant-dark': props.variant === 'dark',
      'button-icon': !!props.iconOnly,
    },
    props.className
  );
  return (
    <S.Button
      {...cleanProps}
      ref={ref}
      loadingIcon={<S.Spinner size={props.variant === 'link' ? 'xs' : 'sm'} />}
      children={props.children && <div className="button-children">{props.children}</div>}
      className={classNames}
    />
  );
});
