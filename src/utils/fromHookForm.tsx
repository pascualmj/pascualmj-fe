import { FieldError, FormState, Path, UseFormReturn } from 'react-hook-form';
import { distinctUntilChanged, Observable, shareReplay } from 'rxjs';

const getDeepValue = (obj: any, path: any) => {
  if (obj[path] !== undefined) {
    return obj[path];
  }
  // eslint-disable-next-line @typescript-eslint/no-redeclare, no-var
  for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
    obj = (obj && (obj as any)[path[i]]) || null;
  }
  return obj;
};

export const $fromHookForm = <T extends object, X extends keyof T>(
  form: UseFormReturn<T, object>,
  prop: X | Path<T> | null = null
) => {
  return new Observable<T[X]>(sub => {
    const initValues = form.getValues();
    initValues && sub.next(prop ? getDeepValue(initValues, prop) : initValues);
    const hookFormSub = form.watch((values: any) =>
      sub.next(prop && values ? getDeepValue(values, prop) : values)
    );
    return () => hookFormSub.unsubscribe();
  }).pipe(shareReplay(), distinctUntilChanged());
};

export const $fromFieldState = <TT extends object>(
  form: UseFormReturn<TT, object>,
  prop: Path<TT>
) => {
  return new Observable<{
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    error?: FieldError;
  }>(sub => {
    const initValues = form.getValues();
    initValues && sub.next(prop ? (initValues as any)[prop] : initValues);
    const hookFormSub = form.watch((values: any) => sub.next(form.getFieldState(prop)));
    return () => hookFormSub.unsubscribe();
  }).pipe(shareReplay(), distinctUntilChanged());
};

export const $fromFormState = <TT extends object>(
  form: UseFormReturn<TT, object>,
  prop: Path<TT>
) => {
  return new Observable<FormState<TT>>(sub => {
    const initValues = form.getValues();
    initValues && sub.next(prop ? (initValues as any)[prop] : initValues);
    const hookFormSub = form.watch((values: any) => setTimeout(() => sub.next(form.formState)));
    return () => hookFormSub.unsubscribe();
  }).pipe(shareReplay(), distinctUntilChanged());
};
