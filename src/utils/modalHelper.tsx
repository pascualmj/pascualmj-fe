import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';

export const modalHelper = <
  T1 extends {
    [key in string]: object;
  }
>() => {
  const bs = new BehaviorSubject<{
    type: keyof T1;
    data: T1[keyof T1];
  } | null>(null);
  return {
    openModal: <T extends keyof T1>(type: T, data: T1[T]) =>
      bs.next({
        type,
        data,
      }),
    $getModal: <T extends keyof T1>(type: T) =>
      bs.pipe(
        // filter((t) => !t || t?.type === type),
        map(m => (m?.type === type ? m?.data : null) as any),
        distinctUntilChanged()
      ) as Observable<T1[T] | null>,
    closeModal: () => bs.next(null),
  };
};
