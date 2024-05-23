import styled from 'styled-components';
import { InputTextarea } from 'primereact/inputtextarea';
import { PInputTextStyleBase } from '../PInputText/PInputText.style';

export const PInputTextareaStyle = {
  InputTextarea: styled(InputTextarea)`
    ${PInputTextStyleBase}
    padding: 10px 14px;
    resize: none;
  `,
};
