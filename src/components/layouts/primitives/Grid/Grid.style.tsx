import styled from 'styled-components';
import { spaceSizes } from 'services/theme';

export const GridStyle = {
  Grid: styled.div<{ props: any }>`
    display: grid;
    grid-template-columns: ${({ props }) =>
      `repeat(${props.cols ?? 'auto-fit'}, minmax(${
        props.minColumnWidth ? `${props.minColumnWidth}px` : 'auto'
      }, 1fr))`};
    gap: ${({ props }) => (props.gap ? (spaceSizes as any)[props.gap] : '0px')};
  `,
};
