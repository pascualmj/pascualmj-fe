
import { Panel, PanelProps } from 'primereact/panel';
import React from 'react';
import { PPanelStyle as S } from './PPanel.style';

export const PPanel = React.forwardRef<
  Panel,
  PanelProps
>((props, ref) => {
  return (
    <S.Panel {...props} ref={ref} />
  );
});

