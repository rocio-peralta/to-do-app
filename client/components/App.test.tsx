//@vitest-environment jsdom

import { afterEach, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
// import matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'


import App from './App'
import { Provider } from 'react-redux'
import store from '../store'

afterEach(cleanup)
// expect.extend(matchers)
const user = userEvent.setup()

test('App should render a textbox', () => {
//Arrange
render((

  <Provider store={store}> 
    <App />
  </Provider>
))
//Act
const component = screen.getByRole('textbox')
//Assert
expect(component).toBeDefined();

})