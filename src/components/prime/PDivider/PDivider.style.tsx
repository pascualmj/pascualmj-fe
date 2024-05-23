import styled from 'styled-components';
import { Divider } from 'primereact/divider';
import { colors } from 'services/theme';

export const PDividerStyle = {
  Divider: styled(Divider)`
    margin: 32px 0 !important;
    &::before {
      border-color: ${colors.slate.l200} !important;
    }
    .p-divider-content {
      color: ${colors.slate.l500};
    }
  `,
};
