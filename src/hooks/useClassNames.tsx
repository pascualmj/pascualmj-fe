import { classNames } from 'primereact/utils';
import { useMemo } from 'react';

export const useClassNames = (
  primeClasses: { [key in string]?: boolean | null },
  classes: string = ''
) => useMemo(() => classes + ' ' + classNames(primeClasses), [classes, primeClasses]);
