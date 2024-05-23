
import { TabMenu, TabMenuProps } from 'primereact/tabmenu';
import React from 'react';
import { PTabMenuStyle as S } from './PTabMenu.style';

export const PTabMenu = React.forwardRef<
  TabMenu,
  TabMenuProps
>((props, ref) => {
  return (
    <S.TabMenu {...props} ref={ref} />
  );
});

