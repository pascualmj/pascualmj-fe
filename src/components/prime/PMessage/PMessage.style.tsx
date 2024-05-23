import styled from 'styled-components';
import { Message } from 'primereact/message';
import { colors } from 'services/theme';

export const PMessageStyle = {
  Message: styled(Message)`
    border: none !important;
    border-radius: 4px;
    padding: 20px;
    display: block;
    background: ${colors.blue.l100};
    position: relative;

    .message-content {
      display: flex;
      align-items: center;

      svg {
        flex: 0 0 16px;
        &.icon-message-info {
          color: ${colors.sky.l600};
        }

        &.icon-message-close {
          width: 16px;
          height: 16px;
          color: ${colors.slate.l500};
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
          &:hover {
            color: ${colors.neutral.l800};
          }
        }
      }

      .message-body {
        flex: 1 1 auto;
        padding: 0 14px;
        h6 {
          color: ${colors.neutral.l900};
        }
        p {
          color: ${colors.neutral.l800};
        }
      }
    }

    &.p-inline-message-error {
      background: ${colors.red.l50};
    }

    &.p-inline-message-info {
      background: ${colors.blue.l100};
    }

    &.p-inline-message-warn {
      background: ${colors.yellow.l50};
    }

    &.p-inline-message-success {
      background: ${colors.lime.l100};
    }

    &.message-closable .message-content .message-body {
      padding-right: 30px;
    }
  `,
};
