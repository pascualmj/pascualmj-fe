import React, { useEffect } from 'react';
import { Dialog, DialogProps } from 'primereact/dialog';
import { PDialogStyle as S } from './PDialog.style';

export const PDialog = React.forwardRef<Dialog, DialogProps>((props, ref) => {
  /**
   * NOTE: This is remediate an internal Prime React issue.
   * When blockScroll prop present, the classname p-overflow-hidden
   * remains on the body even after closing the dialog.
   */
  useEffect(() => {
    return () => {
      const openedModals = document.getElementsByClassName('p-dialog-mask').length;
      if (openedModals) {
        document.body.classList.add('p-overflow-hidden');
      } else {
        document.body.classList.remove('p-overflow-hidden');
      }
    };
  }, []);

  return (
    <S.Dialog
      {...props}
      showHeader={false}
      footer={null}
      resizable={false}
      draggable={false}
      closable={false}
      dismissableMask
      blockScroll
      ref={ref}
    >
      {!!props?.header && (
        <header className="dialog-custom-header">
          {typeof props?.header === 'function' ? props.header(props) : props.header}
        </header>
      )}
      <section className="dialog-custom-content">{props.children}</section>
      {!!props?.footer && (
        <footer className="dialog-custom-footer">
          {typeof props?.footer === 'function' ? props.footer(props) : props.footer}
        </footer>
      )}
    </S.Dialog>
  );
});
