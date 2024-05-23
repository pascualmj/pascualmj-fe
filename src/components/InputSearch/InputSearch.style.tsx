import styled from 'styled-components';
import { PInputText } from 'components/prime/PInputText/PInputText';

export const InputSearchStyle = {
  Container: styled.div`
    position: relative;

    svg {
      position: absolute;
      top: 50%;
      left: 14px;
      transform: translateY(-50%);
    }
  `,
  InputText: styled(PInputText)`
    padding-left: 36px;
  `,
};
