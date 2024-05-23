import React from 'react';
import { Skeleton, SkeletonProps } from 'primereact/skeleton';
import { PSkeletonStyle as S } from './PSkeleton.style';

export const PSkeleton = React.forwardRef<Skeleton, SkeletonProps>((props, ref) => {
  return <S.Skeleton {...props} ref={ref} />;
});
