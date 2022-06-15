import { screen, within, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Title from './'

describe('Title', () => {
  beforeEach(() => {
    render(<Title />)
  })

  it('contains the string "Muzic List"', () => {
    const title = screen.getByRole('heading', { level: 1 })
    expect(title.textContent).toContain('Muzic List')
  })
})
