import React from 'react';
import { ConfirmDialog, ConfirmDialogProps } from 'primereact/confirmdialog';
import { PConfirmDialogStyle as S } from './PConfirmDialog.style';

export const PConfirmDialog = React.forwardRef<ConfirmDialog, ConfirmDialogProps>((props, ref) => {
  return (
    <>
      <ConfirmDialog {...props} ref={ref} />
      <S.ConfirmDialogCustomGlobal />
    </>
  );
});
