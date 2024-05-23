import React, { ReactNode } from 'react';
import { useObservableState } from 'observable-hooks';
import { Observable } from 'rxjs';

export const FromObservable = <T extends object>({
  $,
  children,
  init,
}: {
  $: Observable<T>;
  children?: (value: T | null) => ReactNode | ReactNode[] | null;
  init?: T;
}) => {
  const value = useObservableState($, init || null);
  return <>{children ? children(value) : value}</>;
};
