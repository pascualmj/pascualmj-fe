import { Helmet } from 'react-helmet-async';
import { HomePageBLoC as BLoC } from './HomePage.bloc';
import { VStack } from 'components/layouts/primitives/Stack/Stack';
import { ProfessionalSummary } from './components/ProfessionalSummary/ProfessionalSummary';
import { ProfessionalExperience } from './components/ProfessionalExperience/ProfessionalExperience';
import { RelevantSkills } from './components/RelevantSkills/RelevantSkills';

const HomePage: React.FC = () => {
  return (
    <BLoC>
      <Helmet>
        <title>Manuel Pascual | Senior Software Engineer</title>
      </Helmet>
      <VStack gap="mdPlus">
        <ProfessionalSummary />
        <ProfessionalExperience />
        <RelevantSkills />
      </VStack>
    </BLoC>
  );
};

export default HomePage;
