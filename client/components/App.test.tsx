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

test('App should render a placeholder', () => {
  //Arrange
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  //Act
  const component = screen.getByPlaceholderText(/add your task/i)
  //Assert
  expect(component.ariaPlaceholder).contains(/add your task/i)
})

test('App should render a button', async () => {
  //Arrange
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  // Act
  const button = screen.getByRole('button')
  await user.click(button)

  //Assert
  expect(button).not.toBeNull()
})
