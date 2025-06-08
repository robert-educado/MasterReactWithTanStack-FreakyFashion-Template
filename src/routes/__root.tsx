import SiteHeader from '@/components/SiteHeader/SiteHeader'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <SiteHeader />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
