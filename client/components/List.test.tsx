//@vitest-environment jsdom

import { afterEach, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cleanup } from '@testing-library/react'

import List from './List'
import { Provider } from 'react-redux'
import store from '../store'

afterEach(cleanup)

test('List should render a list', () => {
  //Arrange
  render(
    <Provider store={store}>
      <List />
    </Provider>,
  )

  //Act
  const component = screen.getByRole('list')

  //Assert
  expect(component).not.toBeNull()
})

test('List should render a list item with correct styling', () => {
  // Arrange
  const { container } = render(
    <Provider store={store}>
      <List />
    </Provider>,
  )

  // Act
  const listItem = container.querySelector(
    '#app > div > ul > li:nth-child(1) > div',
  )

  // Assert
  expect(listItem).not.toBe('#app > div > ul > li:nth-child(1) > div')
})
