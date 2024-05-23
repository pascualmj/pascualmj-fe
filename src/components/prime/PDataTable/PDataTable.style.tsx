import styled from 'styled-components';
import { DataTable } from 'primereact/datatable';
import { colors } from 'services/theme';
import { PButton } from '../PButton/PButton';

export const PDataTableStyle = {
  DataTable: styled(DataTable)`
    th[role='columnheader'] {
      background: none !important;
    }
    th,
    td {
      border-color: ${colors.slate.l100} !important;
      padding: 18px !important;
    }
    .p-column-title {
      font-weight: 600;
      color: ${colors.slate.l400};
      text-transform: uppercase;
      font-size: 13px;
    }
    .p-paginator {
      border: none !important;
      background: none !important;
      padding: 0 18px;
      min-height: 64px;
    }
    .p-paginator-current {
      margin: 0 auto 0 0 !important;
      padding: 0;
      font-size: 12px;
      color: ${colors.slate.l400};
      cursor: default;
    }
  `,
  CurrentPageReport: styled.div`
    font-size: 12px;
    color: ${colors.slate.l400};
    margin-right: auto;
  `,
  PaginationNavigatorButton: styled(PButton)`
    border: 1px solid ${colors.slate.l200};
    background: ${colors.neutral.l0};
    height: 28px;
    width: 28px;
    padding: 0;
    min-width: auto;
    justify-content: center;
    border-radius: 0;
    border-right-width: 0;
    border-left-width: 1px;
    &:hover,
    &:focus {
      border-color: ${colors.slate.l200} !important;
      background: ${colors.slate.l100} !important;
      box-shadow: none;
    }
    &:active {
      background: ${colors.slate.l200} !important;
    }
    &:first-of-type {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-of-type {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-right-width: 1px;
    }
    &.p-disabled {
      opacity: 0.4;
      border-color: ${colors.slate.l200};
      background: ${colors.neutral.l0};
    }
  `,
  EmptyMessage: styled.div`
    padding: 80px 36px;
    background-color: ${colors.neutral.l0};
    display: grid;
    place-items: center;
    text-align: center;
    color: ${colors.slate.l400};
    font-size: 14px;
    line-height: 21px;
  `,
};
