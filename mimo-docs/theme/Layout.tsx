import React from 'react';
import { Outlet, usePageData } from 'rspress/runtime';

export default function Layout() {
  const { page } = usePageData();

  return (
    <div>
      <Outlet />
    </div>
  );
}
