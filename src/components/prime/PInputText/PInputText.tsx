import * as React from 'react';
import { InputText, InputTextProps } from 'primereact/inputtext';
import { PInputTextStyle as S } from './PInputText.style';
import { useClassNames } from 'hooks/useClassNames';

export type PInputTextProps = InputTextProps & {
  invalid?: boolean;
};

export const PInputText = React.forwardRef<typeof InputText, PInputTextProps>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cleanProps = React.useMemo(() => (({ invalid, ...o }: any) => o)(props), [props]);
  const inputClassNames = useClassNames(
    {
      'input-invalid': props.invalid,
    },
    props.className
  );

  return <S.InputText {...cleanProps} className={inputClassNames} ref={ref as any} />;
});
