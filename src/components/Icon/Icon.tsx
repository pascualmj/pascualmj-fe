import React, { useMemo } from 'react';
import { Leaves } from 'types/UtilityTypes';
import { colors } from 'services/theme';

import * as iconsLibrary from './icons.library';
import { getValueByPathString } from 'utils/valueAccessor';

export type IconProps = {
  icon: keyof typeof iconsLibrary;
  size?: number;
  strokeWidth?: number;
  color?: Leaves<typeof colors> | 'currentColor';
  onClick?: () => void;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({ icon, color, ...props }) => {
  const IconComponent = useMemo(() => iconsLibrary[icon], [icon]);
  const colorValue = useMemo(
    () => getValueByPathString(colors, color || '') || 'currentColor',
    [color]
  );
  return <IconComponent {...props} color={colorValue} />;
};
