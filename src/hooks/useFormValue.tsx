import { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

export const useFormValue = <T extends {}, K extends keyof T>(
  form: UseFormReturn<T, object>,
  k: K,
  def: T[K] | null = null
) => {
  const [value, setValue] = useState<T[K] | null>(def);
  useEffect(() => {
    const sub = form.watch(v => {
      (value !== (v as T)[k]) !== undefined && setValue((v as T)[k]);
    });
    return () => sub.unsubscribe();
  }, [form, k]);
  return value;
};
