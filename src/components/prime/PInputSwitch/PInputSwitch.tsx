import React from 'react';
import { InputSwitch, InputSwitchProps } from 'primereact/inputswitch';
import { PInputSwitchStyle as S } from './PInputSwitch.style';

export const PInputSwitch = React.forwardRef<InputSwitch, InputSwitchProps>((props, ref) => {
  return <S.InputSwitch {...props} ref={ref} />;
});
