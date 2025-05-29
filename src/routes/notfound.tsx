import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/notfound')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1 className="text-4xl font-bold mb-5">Page not found</h1>
      <p className="text-lg mb-6">We're so sorry, but the page you're looking for doesn't seem to exist.</p>
      <div className="mt-6">
        Return to{' '}
        <a href="/" className="text-blue-600 underline">
          Home
        </a>
      </div>
    </div>
  )
}
