import React, { useMemo } from 'react';
import { BreadCrumb, BreadCrumbProps } from 'primereact/breadcrumb';
import { PBreadCrumbStyle as S } from './PBreadCrumb.style';
import { MenuItem } from 'primereact/menuitem';
import { mainModulePaths } from 'modules/MainModule/mainModule.paths';
import { useClassNames } from 'hooks/useClassNames';
import { Icon } from 'components/Icon/Icon';

type PBreadCrumbMenuItemCustom = {
  label: string;
  to?: string;
  href?: string;
  disabled?: boolean;
};
type PBreadCrumbProps = Pick<BreadCrumbProps, 'className'> & {
  model?: PBreadCrumbMenuItemCustom[];
  loading?: boolean;
};

const getItemSeparator = (itemIdx: number) => ({
  id: `pbreadcrumb-custom-separator-${itemIdx}`,
  template: () => <Icon icon="chevronRight" size={14} />,
  className: 'separator-custom',
});

const getItemHome = () => ({
  id: `pbreadcrumb-custom-home`,
  template: () => (
    <S.BreadCrumbLink to={mainModulePaths.home}>
      <Icon icon="home" size={14} />
    </S.BreadCrumbLink>
  ),
  className: 'home-custom',
});

const getItem = (item: PBreadCrumbMenuItemCustom, itemIdx: number, original: PBreadCrumbProps['model']) => ({
  id: `pbreadcrumb-custom-item-${itemIdx}`,
  template: () => {
    if (itemIdx === (original?.length || 0) - 1) return <>{item.label}</>;
    if (item.to) return <S.BreadCrumbLink to={item.to}>{item.label}</S.BreadCrumbLink>;
    if (item.href)
      return (
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {item.label}
        </a>
      );
    return <>{item.label}</>;
  },
  className: `item-custom${item.disabled ? ' item-custom-disabled' : ''}`,
});

export const PBreadCrumb = React.forwardRef<BreadCrumb, PBreadCrumbProps>((props, ref) => {
  const loadingModel = useMemo(
    () => (props.loading ? Array.from({ length: 3 }).map(() => ({ label: '. . .' })) : null),
    [props.loading]
  );
  const model = useMemo(
    () =>
      (loadingModel || props.model)?.reduce((items, item, itemIdx, original) => {
        if (itemIdx === 0)
          return [getItemHome(), getItemSeparator(itemIdx), getItem(item, itemIdx, original)];

        return [...items, getItemSeparator(itemIdx), getItem(item, itemIdx, original)];
      }, [] as MenuItem[]),
    [props.model, loadingModel]
  );
  const classNames = useClassNames(
    {
      'pbreadcrumb-loading': props.loading,
    },
    props.className
  );
  return <S.BreadCrumb {...props} model={model} className={classNames} ref={ref} />;
});
