import React from 'react';
import { LayoutCenterAlignedStyle as S } from './LayoutCenterAligned.style';
import { HStack, VStack } from '../primitives/Stack/Stack';
import { Text } from 'components/Text/Text';
import { Box } from '../primitives/Box/Box';
import { Icon } from 'components/Icon/Icon';
import { TextLink } from 'components/TextLink/TextLink';
import profilePictureUrl from 'assets/img/me.jpg';

export const LayoutCenterAligned: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <S.Container>
      <div className="wrapper">
        <VStack gap="xl">
          <S.Header padding="lgPlus" radius="xl" elevation={2}>
            <VStack gap="md">
              <S.ProfilePictureWrapper>
                <img src={profilePictureUrl} alt="Manuel Pascual" />
              </S.ProfilePictureWrapper>
              <VStack>
                <Text tag="h1" family="trirong" weight="bold" color="emerald.l50" size="xxl">
                  Manuel Pascual
                </Text>
                <S.Label tag="p" weight="semiBold" color="emerald.l400">
                  Senior Software Engineer
                </S.Label>
              </VStack>
              <HStack gap="md" align="center" inline>
                <HStack gap="xxs" inline align="center">
                  <Icon icon="mapPin" size={16} color="emerald.l400" />
                  <Text color="emerald.l400" size="sm">
                    Rosario, Argentina
                  </Text>
                </HStack>
                <HStack gap="xxs" inline align="center">
                  <Icon icon="inbox" size={16} color="emerald.l400" />
                  <Text size="sm">
                    <TextLink as="a" href="mailto:hello@pascualmj.dev" severity="invert">
                      hello@pascualmj.dev
                    </TextLink>
                  </Text>
                </HStack>
              </HStack>
            </VStack>
          </S.Header>
          {children}
          <Box padding={['lg', 'none', 'none']}>
            <VStack gap="xs" align="center">
              <Icon icon="code" color="slate.l300" size={28} />
              <VStack gap="none">
                <Text weight="bold" color="slate.l300" size="smPlus" align="center">
                  Manuel Pascual
                </Text>
                <Text color="slate.l300" size="smPlus" align="center">
                  SR Software Engineer
                </Text>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </div>
    </S.Container>
  );
};
