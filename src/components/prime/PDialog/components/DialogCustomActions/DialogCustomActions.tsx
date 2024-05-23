import React from 'react';
import { DialogCustomActionsStyle as S } from './DialogCustomActions.style';
import { PButton, PButtonProps } from 'components/prime/PButton/PButton';

export const TwoActions: React.FC<{
  actionMain: PButtonProps;
  actionSecondary: PButtonProps;
}> = ({ actionMain, actionSecondary }) => {
  return (
    <S.Container>
      <PButton
        {...actionSecondary}
        label={actionSecondary.label || 'Cerrar'}
        variant={actionSecondary.variant || 'tertiary'}
      />
      <PButton {...actionMain} label={actionMain.label || 'Aceptar'} />
    </S.Container>
  );
};

export const OneAction: React.FC<{ action: PButtonProps }> = ({ action }) => {
  return (
    <S.Container>
      <PButton
        {...action}
        label={action.label || 'Cerrar'}
        variant={action.variant || 'tertiary'}
      />
    </S.Container>
  );
};
