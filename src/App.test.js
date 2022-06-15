import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('renders learn react link', () => {
    const linkElement = screen.getByText(/Muzic List/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('tests that entering text in the input fields of the form does not add a card', () => {
    const cardNumber = screen.getAllByRole('comment')
    expect(cardNumber.length).toBe(6)

    const titleInput = screen.getByLabelText('Title')
    userEvent.type(titleInput, 'The Scientist')

    const singerInput = screen.getByLabelText('Singer')
    userEvent.type(singerInput, 'Coldplay')

    const genreInput = screen.getByLabelText('Genre')
    userEvent.type(genreInput, 'Pop')

    const linkInput = screen.getByLabelText('Link')
    userEvent.type(linkInput, 'http://www.google.com')

    const cardNumberAfter = screen.getAllByRole('comment')
    expect(cardNumberAfter.length).toBe(6)
  })

  it('tests to have 7 cards after one is added', () => {
    const cardNumber = screen.getAllByRole('comment')
    expect(cardNumber.length).toBe(6)

    const formSubmitBtn = screen.getByRole('button', { name: 'Add' })
    userEvent.click(formSubmitBtn)

    const cardNumberAfter = screen.getAllByRole('comment')
    expect(cardNumberAfter.length).toBe(7)
  })

  it('tests a card can be removed', () => {
    const cardNumber = screen.getAllByRole('comment')
    expect(cardNumber.length).toBe(6)

    const cardDeleteBtn = screen.getAllByRole('button', {
      name: 'X',
    })
    userEvent.click(cardDeleteBtn[0])

    const cardNumberAfter = screen.getAllByRole('comment')
    expect(cardNumberAfter.length).toBe(5)
  })
})
