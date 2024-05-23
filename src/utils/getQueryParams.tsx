import { distinctUntilChanged, Observable, shareReplay } from 'rxjs';

export type ParseFunc<T = string> = (val: string | null) => T | null;

export const getQueryParams = (
  params: { [key in string]: ParseFunc<any> },
  query: string = window.location.search
) => {
  const qp = new URLSearchParams(query);
  return Object.keys(params).reduce((prev, cur: string) => {
    prev[cur] = params[cur](qp.get(cur));
    return prev;
  }, {} as any);
};

export const $fromQueryParams = (params: { [key in string]: ParseFunc<any> }) => {
  return new Observable<any>(sub => {
    let prevQueryParams = '';
    const pathname = window.location.pathname;
    const observer = new MutationObserver(() => {
      if (window.location.pathname === pathname && window.location.search !== prevQueryParams) {
        prevQueryParams = window.location.search;
        sub.next(getQueryParams(params));
      }
    });
    observer.observe(document, { subtree: true, childList: true });
    return () => observer.disconnect();
  }).pipe(shareReplay(), distinctUntilChanged());
};
