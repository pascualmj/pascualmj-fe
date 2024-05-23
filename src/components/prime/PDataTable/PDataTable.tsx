import React from 'react';
import { DataTable, DataTableProps, DataTableValueArray } from 'primereact/datatable';
import { PDataTableStyle as S } from './PDataTable.style';
import { Icon } from 'components/Icon/Icon';

export const PDataTable = React.forwardRef<
  DataTable<DataTableValueArray>,
  DataTableProps<DataTableValueArray>
>((props, ref) => {
  return (
    <S.DataTable
      rows={10}
      {...props}
      emptyMessage={frozen => (
        <S.EmptyMessage>
          {typeof props?.emptyMessage === 'function'
            ? props.emptyMessage?.(frozen)
            : props.emptyMessage || 'No existen resultados para mostrar en este momento.'}
        </S.EmptyMessage>
      )}
      paginator={!!props.value?.length}
      paginatorTemplate={{
        CurrentPageReport: opts => (
          <S.CurrentPageReport>{`${opts.first} a ${opts.last} de ${opts.totalRecords}`}</S.CurrentPageReport>
        ),
        FirstPageLink: opts => (
          <S.PaginationNavigatorButton onClick={opts.onClick} disabled={opts.disabled}>
            <Icon icon="chevronFirst" color="slate.l300" size={18} />
          </S.PaginationNavigatorButton>
        ),
        PrevPageLink: opts => (
          <S.PaginationNavigatorButton onClick={opts.onClick} disabled={opts.disabled}>
            <Icon icon="chevronLeft" color="slate.l300" size={18} />
          </S.PaginationNavigatorButton>
        ),
        NextPageLink: opts => (
          <S.PaginationNavigatorButton onClick={opts.onClick} disabled={opts.disabled}>
            <Icon icon="chevronRight" color="slate.l300" size={18} />
          </S.PaginationNavigatorButton>
        ),
        LastPageLink: opts => (
          <S.PaginationNavigatorButton onClick={opts.onClick} disabled={opts.disabled}>
            <Icon icon="chevronLast" color="slate.l300" size={18} />
          </S.PaginationNavigatorButton>
        ),
      }}
      ref={ref}
    />
  );
});
