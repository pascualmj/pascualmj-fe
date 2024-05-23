import { NavigateFunction, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { mainModuleRoutes } from 'modules/MainModule/mainModule';
import { AppLoading } from 'components/AppLoading/AppLoading';

const router = createBrowserRouter([
  ...mainModuleRoutes,
  {
    path: '*',
    element: <div>404 Not found!</div>,
  },
]);

export const navigate: NavigateFunction = (...args) => {
  (router.navigate as any)(...args);
};

export const RootRouter = () => {
  return (
    <Suspense fallback={<AppLoading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
