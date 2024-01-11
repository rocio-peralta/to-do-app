import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './components/App'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'


document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="rocio-peralta.au.auth0.com"
      clientId="AFLLKfMJ4iGFRosFKLj6aeDhfT5crStX"
      authorizationParams={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        audience: import.meta.env.Vite_AUTH0_AUDIENCE,
        redirect_uri: window.location.origin,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Auth0Provider>
  )
})
