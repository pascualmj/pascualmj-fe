import React from 'react';
import { VStack } from 'components/layouts/primitives/Stack/Stack';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Text } from 'components/Text/Text';

export const ProfessionalExperience: React.FC = () => {
  return (
    <VStack gap="md">
      <SectionTitle>Professional experience</SectionTitle>
      <VStack gap="mdPlus">
        <VStack gap="xs">
          <VStack gap="none">
            <Text tag="h3" family="trirong" weight="bold" color="slate.l700">
              SR Software Engineer @ SecurityScorecard
            </Text>
            <Text tag="p" color="neutral.l500">
              Nov 2022 to present
            </Text>
          </VStack>
          <Text tag="p" color="slate.l500">
            Planned and developed high-value customer-facing features, focusing on backend and frontend
            development using React, Node, and Typescript. Collaborated with the Growth team to conceptualize
            and implement monetization and activation features, driving increased revenue and enhanced
            customer retention.
          </Text>
        </VStack>
        <VStack gap="xs">
          <VStack gap="none">
            <Text tag="h3" family="trirong" weight="bold" color="slate.l700">
              SR Software Engineer @ Yabble
            </Text>
            <Text tag="p" color="neutral.l500">
              Jul 2021 to Dec 2022
            </Text>
          </VStack>
          <Text tag="p" color="slate.l500">
            I played a key role in building the platform from the ground up. Leveraging React, RxJS, and
            TypeScript, I helped develop the frontend architecture. I collaborated closely with the design
            team to create and implement design system components, ensuring comprehensive documentation with
            Storybook.
          </Text>
        </VStack>
        <VStack gap="xs">
          <VStack gap="none">
            <Text tag="h3" family="trirong" weight="bold" color="slate.l700">
              SR Software Engineer @ Personal Pay
            </Text>
            <Text tag="p" color="neutral.l500">
              Jul 2020 to Sep 2021
            </Text>
          </VStack>
          <Text tag="p" color="slate.l500">
            Worked on the development of the digital wallet using React Native and Node APIs in a
            micro-services ecosystem. Facilitated third-party integrations, including the core banking
            provider and the logistic vendor system, among others.
          </Text>
        </VStack>
        <VStack gap="xs">
          <VStack gap="none">
            <Text tag="h3" family="trirong" weight="bold" color="slate.l700">
              Frontend Developer @ Estudio BL
            </Text>
            <Text tag="p" color="neutral.l500">
              2012 to 2020
            </Text>
          </VStack>
          <Text tag="p" color="slate.l500">
            Served as a Frontend Developer at a digital agency, responsible for designing, developing, and
            delivering user interfaces for local businesses.
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};
