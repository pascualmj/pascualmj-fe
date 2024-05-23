import styled from 'styled-components';
import { InputSwitch } from 'primereact/inputswitch';
import { colors } from 'services/theme';

export const PInputSwitchStyle = {
  InputSwitch: styled(InputSwitch)`
    .p-inputswitch-slider {
      background-color: ${colors.slate.l200};
    }
    &:hover {
      .p-inputswitch-slider {
        background-color: ${colors.slate.l200} !important;
      }
    }
    &.p-inputswitch-checked {
      .p-inputswitch-slider {
        background-color: ${colors.sky.l600};
      }
      &:hover {
        .p-inputswitch-slider {
          background-color: ${colors.sky.l600} !important;
        }
      }
    }
    &.p-focus {
      .p-inputswitch-slider {
        box-shadow: none !important;
      }
    }
    &.p-disabled {
      opacity: 0.5;
    }
  `,
};
