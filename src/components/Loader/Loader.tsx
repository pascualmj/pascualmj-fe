import React from 'react';
import { LoaderStyle as S } from './Loader.style';
import { useClassNames } from 'hooks/useClassNames';

export const Loader: React.FC<{ size?: 'xs' | 'sm' | 'md' | 'lg'; className?: string }> = ({
  size,
  className,
}) => {
  const classNames = useClassNames(
    {
      'loader-xs': size === 'xs',
      'loader-sm': size === 'sm',
      'loader-lg': size === 'lg',
    },
    className
  );

  return (
    <S.Container className={classNames}>
      <span className="loader"></span>
    </S.Container>
  );
};
