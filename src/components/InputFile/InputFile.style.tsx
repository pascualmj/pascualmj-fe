import styled from 'styled-components';
import { colors } from 'services/theme';

export const InputFileStyle = {
  Container: styled.div`
    border-radius: 4px;
    background-color: ${colors.neutral.l0};
    border: 1px solid ${colors.slate.l200};
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    & > input[type='file'] {
      visibility: hidden;
      height: 0px;
      width: 0px;
      display: none;
    }

    &.input-invalid {
      border-color: ${colors.red.l300};
    }
  `,
  FileItem: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    .preview-img-wrapper {
      flex: 0 0 50px;
      width: 50px;
      height: 50px;
      border-radius: 4px;
      overflow: hidden;
      border: 1px solid ${colors.slate.l200};

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    p {
      flex: 1 1 auto;
      font-size: 12px;
      color: ${colors.slate.l500};
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:not(:last-of-type) {
      padding-bottom: 12px;
      border-bottom: 1px solid ${colors.slate.l200};
    }
  `,
  MultipleActions: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    & > * {
      flex: 1 1 auto;
      width: 50%;
    }
  `,
  Rules: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: ${colors.slate.l500};
  `,
};
