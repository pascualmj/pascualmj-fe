import styled from 'styled-components';
import { Dialog } from 'primereact/dialog';
import { colors } from 'services/theme';

export const PDialogStyle = {
  Dialog: styled(Dialog)`
    max-width: 480px;
    width: calc(100vw - 48px);
    box-shadow: 0px 0px 12px 0px color-mix(in srgb, ${colors.neutral.l900}, transparent 80%);
    max-height: 90vh;

    .p-dialog-content {
      border-radius: 8px !important;
      padding: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      .dialog-custom-header {
        min-height: 48px;
        display: flex;
        align-items: center;
        padding: 12px;
        color: ${colors.neutral.l800};
        font-size: 16px;
        font-weight: 600;
        border-bottom: 1px solid ${colors.slate.l200};
      }

      .dialog-custom-content {
        padding: 24px 12px 12px;
        overflow-y: auto;
      }

      .dialog-custom-footer {
        min-height: 48px;
        display: flex;
        align-items: center;
        padding: 12px;
        border-top: 1px solid ${colors.slate.l200};
        color: ${colors.slate.l400};
        font-size: 12px;
      }
    }
  `,
};
