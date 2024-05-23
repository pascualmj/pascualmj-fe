import * as React from 'react';
import { Dropdown, DropdownProps } from 'primereact/dropdown';
import { PDropdownStyle as S } from './PDropdown.style';
import { useClassNames } from 'hooks/useClassNames';

export const PDropdown = React.forwardRef<
  Dropdown,
  DropdownProps & {
    invalid?: boolean;
  }
>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cleanProps = React.useMemo(() => (({ invalid, ...o }: any) => o)(props), [props]);
  const dropdownClassNames = useClassNames(
    {
      'dropdown-invalid': props.invalid,
    },
    props.className
  );

  return (
    <>
      <S.Dropdown
        valueTemplate={option => (
          <S.CustomValueTemplate>
            {option?.label || option?.[props?.optionLabel || ''] || props?.placeholder}
          </S.CustomValueTemplate>
        )}
        {...cleanProps}
        className={dropdownClassNames}
        ref={ref}
      />
      <S.DropdownGlobalStyles />
    </>
  );
});
