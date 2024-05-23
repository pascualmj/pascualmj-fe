import styled from 'styled-components';
import { Skeleton } from 'primereact/skeleton';
import { colors } from 'services/theme';

export const PSkeletonStyle = {
  Skeleton: styled(Skeleton)<{ $bgColor?: string }>`
    background-color: ${({ $bgColor }) => $bgColor || colors.slate.l100};
    border-radius: 4px;
  `,
};
