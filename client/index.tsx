import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'
import { Auth0Provider, Auth0ProviderOptions} from "@auth0/auth0-react";

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="rocio-peralta.au.auth0.com"
   
      clientId="AFLLKfMJ4iGFRosFKLj6aeDhfT5crStX"
      authorizationParams={{
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      audience: "https://To-do/api",
      redirect_uri: window.location.origin,
    }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  );
});
