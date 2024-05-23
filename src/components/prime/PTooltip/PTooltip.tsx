import React from 'react';
import { Tooltip, TooltipProps } from 'primereact/tooltip';
import { PTooltipStyle as S } from './PTooltip.style';

export const PTooltip = React.forwardRef<Tooltip, TooltipProps>((props, ref) => {
  return <S.Tooltip {...props} showDelay={300} ref={ref} />;
});
