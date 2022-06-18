import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import TrackMusicPage from '../../Pages/TrackMusicPage'

describe('App', () => {
  beforeEach(() => {
    render(<TrackMusicPage />, { wrapper: MemoryRouter })
  })

  it('tests there are no cards on test startup', () => {
    const cards = screen.queryAllByRole('comment')
    expect(cards.length).toEqual(0)
  })

  it('tests that entering text in the input fields of the form does not add a card', () => {
    const titleInput = screen.getByLabelText('Title')
    userEvent.type(titleInput, 'The Scientist')

    const singerInput = screen.getByLabelText('Singer')
    userEvent.type(singerInput, 'Coldplay')

    const genreInput = screen.getByLabelText('Genre')
    userEvent.type(genreInput, 'Pop')

    const linkInput = screen.getByLabelText('Link')
    userEvent.type(linkInput, 'http://www.google.com')

    const cards = screen.queryAllByRole('comment')
    expect(cards.length).toEqual(0)
  })

  it('tests that a card can be added', () => {
    const titleInput = screen.getByLabelText('Title')
    userEvent.type(titleInput, 'The Scientist')

    const singerInput = screen.getByLabelText('Singer')
    userEvent.type(singerInput, 'Coldplay')

    const genreInput = screen.getByLabelText('Genre')
    userEvent.type(genreInput, 'Pop')

    const linkInput = screen.getByLabelText('Link')
    userEvent.type(linkInput, 'http://www.google.com')

    const formSubmitBtn = screen.getByRole('button', { name: 'Add' })
    userEvent.click(formSubmitBtn)

    const cardNumberAfter = screen.getAllByRole('comment')
    expect(cardNumberAfter.length).toBe(1)
  })

  it('tests a card can be removed', () => {
    const titleInput = screen.getByLabelText('Title')
    userEvent.type(titleInput, 'TestInput12345')

    const singerInput = screen.getByLabelText('Singer')
    userEvent.type(singerInput, 'TestInput12345')

    const genreInput = screen.getByLabelText('Genre')
    userEvent.type(genreInput, 'TestInput12345')

    const linkInput = screen.getByLabelText('Link')
    userEvent.type(linkInput, 'TestInput12345')

    const formSubmitBtn = screen.getByRole('button', { name: 'Add' })
    userEvent.click(formSubmitBtn)

    const beforeCardNumber = screen.getAllByRole('comment').length

    const cardDeleteBtn = screen.getAllByRole('button', {
      name: 'X',
    })
    userEvent.click(cardDeleteBtn[beforeCardNumber - 1])

    const afterCardNumber = screen.queryAllByRole('comment')
    expect(afterCardNumber.length).toBe(beforeCardNumber - 1 || 0)
  })
})
