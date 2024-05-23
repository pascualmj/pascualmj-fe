import React, { useMemo } from 'react';
import { UserAvatarStyle as S } from './UserAvatar.style';
import { useClassNames } from 'hooks/useClassNames';

export const UserAvatar: React.FC<{
  firstName?: string | null;
  lastName?: string | null;
  onClick?: (e: any) => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ firstName, lastName, onClick, size, className }) => {
  const label = useMemo(() => {
    if (firstName && lastName) return `${firstName.at(0)}${lastName.at(0)}`;
    if (firstName) return `${firstName.slice(0, 2)}`;
    if (lastName) return `${lastName.slice(0, 2)}`;
    return 'US';
  }, [firstName, lastName]);
  const classNames = useClassNames(
    {
      [`custom-size-${size || 'md'}`]: true,
    },
    className
  );

  return <S.Avatar label={label} onClick={onClick} className={classNames} />;
};
