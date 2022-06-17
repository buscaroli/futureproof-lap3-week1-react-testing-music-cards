import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import BackButton from './'

describe('BackButton', () => {
  beforeEach(() => {
    render(<BackButton />, { wrapper: MemoryRouter })
  })

  it('tests the button exists', () => {
    const btn = screen.getByRole('button')
    expect(btn).toBeTruthy()
  })

  it('tests the button renders with the correct text', () => {
    const btn = screen.getByRole('button')
    expect(btn.textContent).toContain('Back')
  })

  it('tests the button can be clicked', () => {
    const btn = screen.getByRole('button')

    userEvent.click(btn)

    expect(btn).toBeCalled()
  })
})
