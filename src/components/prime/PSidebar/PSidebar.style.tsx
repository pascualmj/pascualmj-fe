import styled from 'styled-components';
import { Sidebar } from 'primereact/sidebar';
import { colors } from 'services/theme';

export const PSidebarStyle = {
  Sidebar: styled(Sidebar)`
    box-shadow: none;
    width: 100% !important;
    max-width: 450px;
    background: transparent;
    padding: 24px;

    .p-sidebar-header {
      display: none;
    }

    .p-sidebar-content {
      box-shadow: 0px 0px 12px 0px color-mix(in srgb, ${colors.neutral.l900}, transparent 80%);
      background-color: ${colors.neutral.l0};
      border-radius: 8px;
      padding: 0px !important;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: stretch;

      .sidebar-custom-header {
        flex: 0 0 fit-content;
        min-height: 48px;
        display: flex;
        align-items: center;
        padding: 12px;
        color: ${colors.neutral.l800};
        font-size: 16px;
        font-weight: 600;
        border-bottom: 1px solid ${colors.slate.l200};
      }

      .sidebar-custom-content {
        flex: 1 1 auto;
        padding: 24px 12px 12px;
        overflow-y: auto;
      }

      .sidebar-custom-footer {
        flex: 0 0 fit-content;
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
