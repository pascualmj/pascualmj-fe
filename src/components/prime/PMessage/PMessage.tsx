import React, { useMemo, useState } from 'react';
import { Message, MessageProps } from 'primereact/message';
import { PMessageStyle as S } from './PMessage.style';
import { useClassNames } from 'hooks/useClassNames';
import { Icon } from 'components/Icon/Icon';

export type PMessageCustomProps = Pick<MessageProps, 'severity' | 'className'> & {
  description: string;
  title?: string;
  closable?: boolean;
};

export const PMessage = React.forwardRef<Message, PMessageCustomProps>(
  ({ severity, title, description, closable, className }, ref) => {
    const [visible, setVisible] = useState(true);
    const MessageIcon = useMemo(() => {
      switch (severity) {
        case 'error':
          return <Icon icon="ban" size={16} color="red.l300" />;
        case 'warn':
          return <Icon icon="alertTriangle" size={16} color="orange.l300" />;
        case 'success':
          return <Icon icon="checkCircle2" size={16} color="green.l600" />;
        default:
          return <Icon icon="info" size={16} color="sky.l600" />;
      }
    }, [severity]);
    const messageClassNames = useClassNames(
      {
        'message-closable': closable,
      },
      className
    );

    return visible ? (
      <S.Message
        severity={severity}
        content={
          <div className="message-content">
            {MessageIcon}
            <div className="message-body">
              {!!title && <h6>{title}</h6>}
              <p>{description}</p>
            </div>
            {closable && (
              <Icon icon="x" className="icon-message-close" onClick={() => setVisible(false)} />
            )}
          </div>
        }
        className={messageClassNames}
        ref={ref}
      />
    ) : null;
  }
);
