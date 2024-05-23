import styled from 'styled-components';
import { colors } from 'services/theme';
import { Text } from 'components/Text/Text';

export const SectionTitleStyle = {
  Title: styled(Text)`
    background: linear-gradient(
      90deg,
      ${colors.emerald.l600} 0%,
      ${colors.emerald.l500} 50%,
      ${colors.emerald.l700} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
};
