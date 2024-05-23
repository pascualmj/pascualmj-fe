import * as React from 'react';
import { Outlet, RouteObject, ScrollRestoration } from 'react-router-dom';
import { mainModulePaths } from './mainModule.paths';
import { LayoutCenterAligned } from 'components/layouts/LayoutCenterAligned/LayoutCenterAligned';

const HomePage = React.lazy(() => import('./HomePage/HomePage'));

const MainModule: React.FC = () => {
  return (
    <LayoutCenterAligned>
      <Outlet />
      <ScrollRestoration />
    </LayoutCenterAligned>
  );
};

export const mainModuleRoutes: RouteObject[] = [
  {
    element: <MainModule />,
    children: [
      {
        path: mainModulePaths.home,
        element: <HomePage />,
      },
    ],
  },
];
