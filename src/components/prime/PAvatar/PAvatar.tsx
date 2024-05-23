import { Avatar, AvatarProps } from 'primereact/avatar';
import React from 'react';
import { PAvatarStyle as S } from './PAvatar.style';

export const PAvatar = React.forwardRef<
  Avatar,
  Pick<AvatarProps, 'label' | 'onClick' | 'className'>
>((props, ref) => {
  return <S.Avatar {...props} shape="circle" ref={ref} />;
});
