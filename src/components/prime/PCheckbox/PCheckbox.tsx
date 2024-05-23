import React, { useMemo } from 'react';
import { Checkbox, CheckboxProps } from 'primereact/checkbox';
import { PCheckboxStyle as S } from './PCheckbox.style';
import { useClassNames } from 'hooks/useClassNames';

export const PCheckbox = React.forwardRef<
  Checkbox,
  CheckboxProps & {
    label?: React.ReactNode;
    invalid?: boolean;
  }
>((props, ref) => {
  const cleanProps = useMemo(() => (({ className, invalid, ...o }) => o)(props), [props]);
  const checkboxClassNames = useClassNames({
    'input-invalid': props.invalid,
  });

  return (
    <S.CheckboxWrapper className={props.className}>
      <S.Checkbox {...cleanProps} className={checkboxClassNames} ref={ref} />
      {props.label && <label htmlFor={props.inputId}>{props.label}</label>}
    </S.CheckboxWrapper>
  );
});
