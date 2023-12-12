import React, { lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import Login from '@/pages/login';
import NotFound from '@/pages/404';
let Home = lazy(() => import('@/pages/home'));
let SubPage1 = lazy(() => import('@/pages/subPage1'))
let SubPage2 = lazy(() => import('@/pages/subPage2'))
let Welcome = lazy(() => import('@/pages/Welcome'))


namespace SyncRoute {
  export type Routes = {
    path: string;
    element: React.ReactNode;
    children?: Routes[];
    meta?: any
    redirect?: string
  };
}
export const rootRouter: SyncRoute.Routes[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
    meta: {
      requiresAuth: false,
      key: 'login'
    }
  },
  {
    path: '*',
    element: <Navigate to="/404" />,
    meta: {
      isLogin: false,
      key: 'home'
    },
  },
  {
    path: '/404',
    element: (
      <Suspense>
        <NotFound />
      </Suspense>
    ),
    meta: {
      isLogin: false,
      key: 'home'
    },
  },
  {
    path: '/home',
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),

    meta: {
      isLogin: true,
      key: 'home'
    },
    redirect: '/home/welcome',
    children: [
      {
        path: '/home/sub-page1',
        element: (
          <Suspense>
            <SubPage1></SubPage1>
          </Suspense>
        ),
        meta: {
          isLogin: false,
          key: 'home'
        },
      },
      {
        path: '/home/sub-page2',
        element: (
          <Suspense>
            <SubPage2></SubPage2>
          </Suspense>
        ),
        meta: {
          isLogin: true,
          key: 'home'
        },
      },
      {
        path: '/home/welcome',
        element: (
          <Suspense>
            <Welcome></Welcome>
          </Suspense>
        ),
        meta: {
          isLogin: true,
          key: 'home'
        },
      },
    ]
  },

];


const RouterBeforeEach = (props: any) => {
  if (props?.route?.meta?.isLogin) {//是否需要验证
    if (!localStorage.token ? true : false) {
      return <Navigate to={"/login"} replace />;
    } else {
      return <div>{props.children}</div>;
    }
  } else {
    return <div>{props.children}</div>;
  }
};


// 渲染路由
const renderRoutes = (routes: any) => {
  return routes.map((item: any) => {
    const route: any = { meta: item?.meta, path: item.path };
    if (item.redirect) {
      route.element = <Navigate to={item.redirect} />;
    }
    if (item.element) {
      route.element = (
        <RouterBeforeEach route={item}>{item.element}</RouterBeforeEach>
      );
    }
    if (item.children) {
      route.children = renderRoutes(item.children);
    }

    return route;
  });
};


const Router = () => {
  return useRoutes(renderRoutes(rootRouter));
};

export default Router;