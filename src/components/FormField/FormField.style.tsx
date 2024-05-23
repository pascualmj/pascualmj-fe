import styled from 'styled-components';
import { colors } from 'services/theme';

export const FormFieldStyle = {
  Container: styled.div`
    margin-bottom: 20px;
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Content: styled.div`
    margin-top: 4px;
  `,
  Label: styled.label``,
  RequiredStar: styled.span`
    position: relative;
    color: ${colors.red.l300};
    font-size: 14px;
    margin-left: 2px;
  `,
  InfoContent: styled.div``,
  HelpText: styled.p`
    margin-top: 3px;
    font-size: 11px;
    line-height: 16px;
    color: ${colors.slate.l500};
  `,
  ErrorText: styled.p`
    margin-top: 3px;
    font-size: 11px;
    line-height: 16px;
    color: ${colors.red.l300};
  `,
};
