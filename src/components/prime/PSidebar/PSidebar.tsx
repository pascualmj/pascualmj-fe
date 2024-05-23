import React, { useMemo } from 'react';
import { Sidebar, SidebarProps } from 'primereact/sidebar';
import { PSidebarStyle as S } from './PSidebar.style';

type PSidebarCustomProps = SidebarProps & {
  header?: React.ReactNode | ((props: PSidebarCustomProps) => React.ReactNode);
  footer?: React.ReactNode | ((props: PSidebarCustomProps) => React.ReactNode);
};

export const PSidebar = React.forwardRef<Sidebar, PSidebarCustomProps>((props, ref) => {
  const cleanProps = useMemo(() => (({ footer, header, ...o }: any) => o)(props), [props]);

  return (
    <S.Sidebar
      position="right"
      {...cleanProps}
      dismissable
      blockScroll
      showCloseIcon={false}
      ref={ref}
    >
      {!!props?.header && (
        <header className="sidebar-custom-header">
          {typeof props?.header === 'function' ? props.header(props) : props.header}
        </header>
      )}
      <section className="sidebar-custom-content">{props.children}</section>
      {!!props?.footer && (
        <footer className="sidebar-custom-footer">
          {typeof props?.footer === 'function' ? props.footer(props) : props.footer}
        </footer>
      )}
    </S.Sidebar>
  );
});
