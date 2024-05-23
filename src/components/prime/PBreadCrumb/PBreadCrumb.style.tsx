import styled, { keyframes } from 'styled-components';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Link } from 'react-router-dom';
import { colors } from 'services/theme';

const animationPulseKeyframes = keyframes`
  0%, 100% {
		opacity: 0.7;
	}
	50% {
		opacity: 0.3;
	}
`;

export const PBreadCrumbStyle = {
  BreadCrumb: styled(BreadCrumb)`
    background: none;
    padding: 0;
    border: none;
    border-radius: 0px;
    font-size: 12px;

    & > ul {
      gap: 4px;
    }

    .p-breadcrumb-chevron {
      display: none;
    }

    .separator-custom,
    .home-custom {
      display: flex;
      align-items: center;
    }

    .separator-custom {
      color: ${colors.slate.l400};
    }

    .item-custom {
      color: ${colors.slate.l500};
      a {
        color: ${colors.slate.l500};
        text-decoration: none;
        &:hover {
          color: ${colors.neutral.l800};
        }
      }
      &.item-custom-disabled {
        color: ${colors.slate.l400};
        opacity: 0.8;
        cursor: not-allowed;
      }
      &:last-of-type {
        color: ${colors.neutral.l800};
      }
    }

    &.pbreadcrumb-loading {
      pointer-events: none;
      opacity: 0.8;
      animation: ${animationPulseKeyframes} 1s infinite;
    }
  `,
  BreadCrumbLink: styled(Link)`
    display: flex;
    align-items: center;
    color: ${colors.slate.l500};
    &:hover {
      color: ${colors.neutral.l800};
    }
  `,
};
