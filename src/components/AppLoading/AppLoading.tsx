import React from 'react';
import { AppLoadingStyle as S } from './AppLoading.style';
import { Loader } from 'components/Loader/Loader';

export const AppLoading: React.FC = () => {
  return (
    <S.Container>
      <Loader size="lg" />
    </S.Container>
  );
};
