import { useObservableState } from 'observable-hooks';
import { useEffect, useMemo } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Observable, of } from 'rxjs';

export const useSetFormDefaults = <TFieldValues extends {}>(
  form?: UseFormReturn<TFieldValues, object> | null,
  $defaults?: Observable<any> | null,
  disabled?: boolean
) => {
  const values: any = useObservableState(disabled ? of(null) : $defaults || of(null), null);
  const cleanValues = useMemo(() => {
    if (!disabled && values && form) {
      const cleanValues: any = Object.assign({}, form.getValues());
      let hasChanges = false;
      Object.keys(cleanValues).forEach(k => {
        if (values[k] !== null && values[k] !== undefined) {
          cleanValues[k] = values[k];
          hasChanges = true;
        }
      });
      return hasChanges ? cleanValues : null;
    }
    return null;
  }, [values, form]);
  useEffect(() => {
    cleanValues && form?.reset && form?.reset(cleanValues);
  }, [form, cleanValues]);
};
