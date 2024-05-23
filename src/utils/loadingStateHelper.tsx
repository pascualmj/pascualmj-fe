import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { HttpClientOptions } from 'services/httpClient';
// (key: 'submit', states: {onProcessing: true; onResolved: false;}) =>
export const loadingStateHelper = <
  T1 extends {
    [key in string]: string | boolean | undefined;
  }
>() => {
  const bs = new BehaviorSubject<{
    type: keyof T1;
    data: T1[keyof T1];
  } | null>(null);
  const setLoading = <T extends keyof T1>(type: T, data: T1[T]) =>
    bs.next({
      type,
      data,
    });
  return {
    setLoading,
    $getLoading: <T extends keyof T1>(type: T) =>
      bs.pipe(
        // filter((t) => !t || t?.type === type),
        map(m => (m?.type === type ? m?.data : null) as any),
        distinctUntilChanged()
      ) as Observable<T1[T] | null>,
    stateHandler: <T extends keyof T1>(
      type: T,
      states: { onProcessing: T1[T]; onResolved: T1[T] }
    ): HttpClientOptions['loadingStateHandler'] => {
      return {
        onProcessing: () => setLoading(type, states.onProcessing),
        onResolved: () => setLoading(type, states.onResolved),
      };
    },
  };
};
