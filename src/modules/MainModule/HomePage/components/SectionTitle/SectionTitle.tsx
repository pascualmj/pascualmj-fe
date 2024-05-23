import React from 'react';
import { SectionTitleStyle as S } from './SectionTitle.style';
import { HStack } from 'components/layouts/primitives/Stack/Stack';

export const SectionTitle: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <HStack inline>
      <S.Title tag="h2" family="trirong" weight="bold" size="lgPlus">
        {children}
      </S.Title>
    </HStack>
  );
};
