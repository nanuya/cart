
import React from 'react';


const DynamicIndex = React.lazy(() => import('./pages/index'));


export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true},
    ]
  }
]

export const pages = [
  { route: '/' },
]
