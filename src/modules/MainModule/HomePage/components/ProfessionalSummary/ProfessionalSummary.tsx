import React from 'react';
import { VStack } from 'components/layouts/primitives/Stack/Stack';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Text } from 'components/Text/Text';

export const ProfessionalSummary: React.FC = () => {
  return (
    <VStack gap="xs">
      <SectionTitle>Professional Summary</SectionTitle>
      <Text tag="p" color="slate.l500">
        Results-driven software engineer with 10+ years of hands-on experience developing robust and efficient
        software solutions. Skilled in full-stack development with strong problem-solving abilities, effective
        communication skills, and a passion for staying current with industry trends and advancements.
      </Text>
    </VStack>
  );
};
