import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getQueryParams, ParseFunc } from 'utils/getQueryParams';

export const StringParam: ParseFunc<string> = (val: any) => val?.toString() || null;
export const BooleanParam: ParseFunc<boolean> = (val: any) =>
  ['true', '1'].includes(val?.toString()) || false;
export const NumberParam: ParseFunc<number> = (val: any) =>
  val && !isNaN(val) ? Number(val) : null;
export const NumberArrayParam: ParseFunc<number[]> = (val: any) =>
  val?.length > 0
    ? (val as string)
        .split(',')
        .map(v => Number(v))
        .filter(v => !isNaN(v))
    : null;

export const useQueryParams = (params: { [key in string]: ParseFunc<any> }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const setQuery = useMemo(
    () =>
      (
        newParams: { [key in keyof typeof params]: string | number | null | undefined },
        options?: {
          to?: string;
          keep?: boolean;
        }
      ) => {
        if (options?.keep) {
          const sp = new URLSearchParams(location.search);
          Object.keys(newParams).forEach((key: any) => {
            sp.delete(key);
            newParams[key] !== null && sp.append(key, newParams[key]?.toString() || '');
          });
          navigate(`${options?.to || location.pathname}?${sp}`);
        } else {
          navigate(
            `${options?.to || location.pathname}?${new URLSearchParams(
              Object.fromEntries(Object.entries(newParams).filter(([, v]) => v != null)) as any
            )}`
          );
        }
      },
    [location.pathname, navigate, location.search]
  );
  return useMemo(
    () => [getQueryParams(params, location.search), setQuery],
    [location.search, params, setQuery]
  );
};

export type SetQuery<T> = (t: T, options?: { to?: string; keep?: boolean }) => void;
