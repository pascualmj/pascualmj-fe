import React from 'react';
import { VStack } from 'components/layouts/primitives/Stack/Stack';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Text } from 'components/Text/Text';

export const RelevantSkills: React.FC = () => {
  return (
    <VStack gap="xs">
      <SectionTitle>Relevant skills & tools</SectionTitle>
      <Text tag="p" color="slate.l500">
        React, Typescript, Redux, React Query, RxJs, Styled Components, Storybook, Vite, Rollup, Testing, Git,
        NPM, Yarn, Github, Bitbucket, RESTful, Node, PostgreSQL, Redis, JWT Auth, OAuth, Docker, AWS services,
        CDN, CI/CD, Jenkins, Github Actions, Datadog, Sentry, Snyk.
      </Text>
    </VStack>
  );
};
