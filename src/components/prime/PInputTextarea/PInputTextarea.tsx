import React from 'react';
import { InputTextarea, InputTextareaProps } from 'primereact/inputtextarea';
import { PInputTextareaStyle as S } from './PInputTextarea.style';
import { useClassNames } from 'hooks/useClassNames';

export const PInputTextarea = React.forwardRef<
  typeof InputTextarea,
  InputTextareaProps & {
    invalid?: boolean;
  }
>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cleanProps = React.useMemo(() => (({ invalid, ...o }: any) => o)(props), [props]);
  const inputClassNames = useClassNames(
    {
      'input-invalid': props.invalid,
    },
    props.className
  );

  return <S.InputTextarea rows={6} {...cleanProps} className={inputClassNames} ref={ref as any} />;
});
