import React, { useRef } from 'react';
import { EllipsisButtonMenuStyle as S } from './EllipsisButtonMenu.style';
import { PButton } from 'components/prime/PButton/PButton';
import { useLocation } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import { PMenuProps } from 'components/prime/PMenu/PMenu';

export const EllipsisButtonMenu: React.FC<{ model: PMenuProps['model'] }> = ({ model }) => {
  const menu = useRef<Menu>(null);
  const location = useLocation();

  return (
    <S.Container>
      <S.Menu
        model={model}
        popup
        ref={menu}
        key={`ellipsis-button-menu-key-${location.pathname}`}
      />
      <PButton iconOnly onClick={e => menu.current?.toggle(e)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-ellipsis"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </PButton>
    </S.Container>
  );
};
