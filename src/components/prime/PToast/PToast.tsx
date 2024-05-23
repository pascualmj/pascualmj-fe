import React from 'react';
import { Toast, ToastProps } from 'primereact/toast';
import { PToastStyle as S } from './PToast.style';

export const PToast = React.forwardRef<Toast, ToastProps>((props, ref) => {
  return <S.Toast appendTo={window.document.body} {...props} baseZIndex={3000} ref={ref} />;
});
