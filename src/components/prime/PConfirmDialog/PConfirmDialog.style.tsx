import { createGlobalStyle } from 'styled-components';
import { colors } from 'services/theme';

export const PConfirmDialogStyle = {
  ConfirmDialogCustomGlobal: createGlobalStyle`
    .p-confirm-dialog {
      max-width: 360px;
      width: calc(100vw - 48px);
      box-shadow: 0px 0px 12px 0px color-mix(in srgb, ${colors.neutral.l900}, transparent 80%);
      max-height: 90vh;
      border-radius: 8px !important;
      overflow: hidden;

      & > .p-dialog-header {
        min-height: 48px;
        display: flex;
        align-items: center;
        padding: 24px;
        & > .p-dialog-title {
          font-size: 18px;
          font-weight: 600;
          color: ${colors.neutral.l900};
        }
      }

      & > .p-dialog-content {
        padding: 0 24px 24px;
        overflow-y: auto;

        .p-confirm-dialog-message {
          margin: 0;
        }
      }

      & > .p-dialog-footer {
        min-height: 48px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 12px 12px;
        color: ${colors.slate.l400};
        gap: 8px;
        & > * {
          margin: 0 !important;
        }
      }
    }
  `,
};
