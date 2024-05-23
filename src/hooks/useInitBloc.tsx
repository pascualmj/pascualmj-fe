import { BLoCBase, IBLoCDestroyable, IBLoCInitialisable } from 'types/BLoCBase';
import { useEffect, useMemo } from 'react';

export const useInitBloc = <
  T extends null | undefined | (BLoCBase<any> & IBLoCDestroyable & IBLoCInitialisable)
>(
  getBloc: () => T,
  params: any[] = []
) => {
  const bloc = useMemo(() => {
    const b = getBloc();
    return b ? Object.freeze(b) : b;
    // eslint-disable-next-line
  }, [...params]);
  useEffect(() => {
    bloc?.onInit && bloc.onInit();
    return () => {
      bloc?.unsub && bloc.unsub();
      bloc?.onDestroy && bloc.onDestroy();
    };
  }, [bloc]);
  return bloc;
};
