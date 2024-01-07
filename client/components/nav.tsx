import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <div className="grid justify-items-end mt-10">
        <header>
      
            <IfAuthenticated>
              <button
                className="flex text-white bg-teal-500 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleSignOut}
              >
                Sign out
              </button>
              {user && <p className="z-0 ml-3 block text-gray-900 text-sm font-light">Signed in as: {user?.nickname}</p>}
            </IfAuthenticated>
   
          <IfNotAuthenticated>
            <button
              className="text-white bg-teal-500 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSignIn}
            >
              Sign in
            </button>
          </IfNotAuthenticated>
        </header>
      </div>
    </>
  )
}

export default Nav
