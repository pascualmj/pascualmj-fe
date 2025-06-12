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
              Apr 2023 to present
            </Text>
          </VStack>
          <Text tag="p" color="slate.l500">
            Planned and developed high-value customer-facing features, focusing on backend and frontend
            development using React, Node, and Typescript. Built interactive data visualization tools to
            transform security metrics into actionable insights. Collaborated with the Growth team to
            conceptualize and implement monetization and activation features, driving increased revenue and
            enhanced customer retention.
          </Text>
        </VStack>
        <VStack gap="xs">
          <VStack gap="none">
            <Text tag="h3" family="trirong" weight="bold" color="slate.l700">
              SR Software Engineer @ Yabble
            </Text>
            <Text tag="p" color="neutral.l500">
              Jul 2021 to May 2023
            </Text>
          </VStack>
          <Text tag="p" color="slate.l500">
            Led frontend development for AI-driven market research platform, architecting interactive data
            visualizations and seamless async user flows. Built intuitive chat interfaces for AI agent
            interactions and comprehensive report generation systems. Established robust component library
            that standardized development practices and accelerated feature delivery across the engineering
            team.
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
