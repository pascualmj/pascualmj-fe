import styled from 'styled-components';
import { Toast } from 'primereact/toast';
import { colors } from 'services/theme';

export const PToastStyle = {
  Toast: styled(Toast)`
    opacity: 1;

    .p-toast-message {
      background: ${colors.neutral.l0} !important;
      border-left-width: 4px !important;
      border-radius: 4px;
      box-shadow: 0px 0px 12px 0px color-mix(in srgb, ${colors.neutral.l900}, transparent 80%);
      margin-bottom: 20px;

      .p-toast-message-content {
        padding: 20px 20px 20px 16px;
        align-items: center;

        svg {
          flex: 0 0 16px;
          width: 16px;
          height: 16px;
          &.icon-message-error {
            color: ${colors.red.l300};
          }
          &.icon-message-warn {
            color: ${colors.orange.l300};
          }
          &.icon-message-success {
            color: ${colors.green.l600};
          }
          &.icon-message-info {
            color: ${colors.sky.l600};
          }
        }

        .custom-content-body {
          flex: 1 1 auto;
          margin: 0;
          padding: 0 14px;

          h6 {
            color: ${colors.neutral.l900};
          }
          p {
            color: ${colors.neutral.l800};
          }
        }

        & > div:last-child {
          align-self: flex-start;
          position: relative;
          top: 3px;

          .p-toast-icon-close {
            width: 13px;
            height: 13px;
            box-shadow: none;
            border: none;
            outline: none;
            background: none;

            .p-toast-icon-close-icon {
              height: 13px;
              width: 13px;
            }
          }
        }
      }
      &.p-toast-message-info {
        border-left-color: ${colors.sky.l600};
      }

      &.p-toast-message-error {
        border-left-color: ${colors.red.l300};
      }

      &.p-toast-message-warn {
        border-left-color: ${colors.orange.l300};
      }

      &.p-toast-message-success {
        border-left-color: ${colors.green.l600};
      }
    }
  `,
};
