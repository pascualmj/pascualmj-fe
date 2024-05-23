import * as React from 'react';
import { PInputText, PInputTextProps } from 'components/prime/PInputText/PInputText';
import { InputPasswordStyle as S } from './InputPassword.style';
import { useClassNames } from 'hooks/useClassNames';
import { Icon } from 'components/Icon/Icon';

export const InputPassword = React.forwardRef<typeof PInputText, PInputTextProps>((props, ref) => {
  const [visible, setVisible] = React.useState(false);
  const classNames = useClassNames({ 'password-visible': visible });

  return (
    <S.Container className={classNames}>
      <PInputText {...props} type={visible ? 'text' : 'password'} ref={ref as any} />
      <div className="toggler-hide" onClick={() => setVisible(false)}>
        <Icon icon="eyeOff" />
      </div>
      <div className="toggler-show" onClick={() => setVisible(true)}>
        <Icon icon="eye" />
      </div>
    </S.Container>
  );
});
