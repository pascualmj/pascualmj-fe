import React, { ReactNode, useEffect, useRef } from 'react';
import { PToast } from 'components/prime/PToast/PToast';
import { ToastMessage, ToastProps } from 'primereact/toast';
import { Icon } from 'components/Icon/Icon';

let toastRef: React.RefObject<any> | null = null;

const icons: { [key: string]: ReactNode } = {
  error: <Icon icon="ban" className="icon-message-error" />,
  info: <Icon icon="info" className="icon-message-info" />,
  warn: <Icon icon="alertTriangle" className="icon-message-warn" />,
  success: <Icon icon="checkCircle2" className="icon-message-success" />,
};

export const ToastService: React.FC = () => {
  const ref = useRef<typeof PToast>(null);
  useEffect(() => {
    toastRef = ref;
  }, []);
  return <PToast ref={ref as any} />;
};

export const toast = (props: {
  severity: ToastMessage['severity'];
  position?: ToastProps['position'];
  title?: string;
  description: string;
  life?: number;
}) => {
  toastRef?.current?.show({
    position: props.position || 'top-right',
    severity: props.severity,
    life: props.life || 4000,
    className: !props.title ? 'description-only' : '',
    content: (
      <>
        {icons[props.severity || 'info']}
        <div className="custom-content-body">
          {!!props.title && <h6>{props.title}</h6>}
          {<p>{props.description}</p>}
        </div>
      </>
    ),
  });
};
