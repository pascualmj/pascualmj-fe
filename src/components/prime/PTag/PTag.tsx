
import { Tag, TagProps } from 'primereact/tag';
import React from 'react';
import { PTagStyle as S } from './PTag.style';

export const PTag = React.forwardRef<
  Tag,
  TagProps
>((props, ref) => {
  return (
    <S.Tag {...props} ref={ref} />
  );
});

