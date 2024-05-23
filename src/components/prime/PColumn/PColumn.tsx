import React from 'react';
import { Column, ColumnProps } from 'primereact/column';
import { PColumnStyle as S } from './PColumn.style';

export const PColumn = React.forwardRef<Column, ColumnProps>((props, ref) => {
  return <S.Column {...props} ref={ref} />;
});
