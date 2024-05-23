import styled from 'styled-components';
import { Tooltip } from 'primereact/tooltip';
import { colors } from 'services/theme';

export const PTooltipStyle = {
  Tooltip: styled(Tooltip)`
    .p-tooltip-text {
      font-size: 12px;
      background: transparent;
      box-shadow: none;
      background-color: ${colors.neutral.l900};
      box-shadow: 0px 0px 12px 0px color-mix(in srgb, ${colors.neutral.l900}, transparent 80%);
      border-radius: 4px;
    }
    &.p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
      border-bottom-color: ${colors.neutral.l900};
    }
    &.p-tooltip.p-tooltip-top .p-tooltip-arrow {
      border-top-color: ${colors.neutral.l900};
    }
    &.p-tooltip.p-tooltip-right .p-tooltip-arrow {
      border-right-color: ${colors.neutral.l900};
    }
    &.p-tooltip.p-tooltip-left .p-tooltip-arrow {
      border-left-color: ${colors.neutral.l900};
    }
  `,
};
