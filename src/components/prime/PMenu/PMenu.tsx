import { Menu, MenuProps } from 'primereact/menu';
import React, { useMemo } from 'react';
import { PMenuStyle as S } from './PMenu.style';
import { MenuItem } from 'primereact/menuitem';

export type PMenuProps = MenuProps & { model?: (MenuItem & { destructive?: boolean })[] };

export const PMenu = React.forwardRef<Menu, PMenuProps>((props, ref) => {
  const model = useMemo(
    () =>
      props.model?.map(m => ({
        ...m,
        className: `${(m as any)?.destructive ? 'destructive ' : ''}${m?.className ?? ''}`,
      })),
    [props.model]
  );

  return <S.Menu {...props} model={model} ref={ref} />;
});
