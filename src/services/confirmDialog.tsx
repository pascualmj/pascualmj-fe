import React from 'react';
import { PConfirmDialog } from 'components/prime/PConfirmDialog/PConfirmDialog';
import { confirmDialog as confirmDialogPrime } from 'primereact/confirmdialog';
import { PButton } from 'components/prime/PButton/PButton';

export const ConfirmDialogService: React.FC = () => <PConfirmDialog />;

export const confirmDialog = (props: {
  title: React.ReactNode;
  description: React.ReactNode;
  onConfirm?: () => void;
  onReject?: () => void;
  confirmLabel?: string;
  rejectLabel?: string;
}) => {
  confirmDialogPrime({
    message: props.description,
    header: props.title,
    draggable: false,
    resizable: false,
    dismissableMask: true,
    closable: false,
    footer: opts => (
      <>
        <PButton
          variant="tertiary"
          label={props.rejectLabel || 'Cancelar'}
          onClick={() => {
            props.onReject?.();
            opts.reject();
          }}
        />
        <PButton
          label={props.confirmLabel || 'Aceptar'}
          onClick={() => {
            props.onConfirm?.();
            opts.accept();
          }}
        />
      </>
    ),
  });
};
