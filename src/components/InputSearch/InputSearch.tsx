import React from 'react';
import { InputSearchStyle as S } from './InputSearch.style';
import { PInputText, PInputTextProps } from 'components/prime/PInputText/PInputText';
import { Icon } from 'components/Icon/Icon';

export const InputSearch = React.forwardRef<typeof PInputText, PInputTextProps>((props, ref) => {
  return (
    <S.Container>
      <Icon icon="search" size={14} color="slate.l500" />
      <S.InputText placeholder="Search" {...props} ref={ref as any} />
    </S.Container>
  );
});
