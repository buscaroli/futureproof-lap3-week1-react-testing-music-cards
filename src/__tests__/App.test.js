import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import App from '../App'

describe('App', () => {
  beforeEach(() => {
    render(<App />, { wrapper: MemoryRouter })
  })

  afterEach(() => {
    // clear the localStorage to empty cards array
    localStorage.setItem('songs', '[]')
  })

  it('renders learn react link', () => {
    const linkElement = screen.getByRole('heading', {
      level: 1,
      text: /Muzic List/i,
    })

    expect(linkElement).toBeInTheDocument()
  })

  // it('tests there are no cards on test startup', () => {
  //   const cards = screen.queryAllByRole('comment')
  //   expect(cards.length).toEqual(0)
  // })

  // it.only('tests that entering text in the input fields of the form does not add a card', () => {
  //   const titleInput = screen.getByLabelText('Title')
  //   userEvent.type(titleInput, 'The Scientist')

  //   const singerInput = screen.getByLabelText('Singer')
  //   userEvent.type(singerInput, 'Coldplay')

  //   const genreInput = screen.getByLabelText('Genre')
  //   userEvent.type(genreInput, 'Pop')

  //   const linkInput = screen.getByLabelText('Link')
  //   userEvent.type(linkInput, 'http://www.google.com')

  //   const cards = screen.queryAllByRole('comment')
  //   expect(cards.length).toEqual(0)
  // })

  // it('tests that a card can be added', () => {
  //   const titleInput = screen.getByLabelText('Title')
  //   userEvent.type(titleInput, 'The Scientist')

  //   const singerInput = screen.getByLabelText('Singer')
  //   userEvent.type(singerInput, 'Coldplay')

  //   const genreInput = screen.getByLabelText('Genre')
  //   userEvent.type(genreInput, 'Pop')

  //   const linkInput = screen.getByLabelText('Link')
  //   userEvent.type(linkInput, 'http://www.google.com')

  //   const formSubmitBtn = screen.getByRole('button', { name: 'Add' })
  //   userEvent.click(formSubmitBtn)

  //   const cardNumberAfter = screen.getAllByRole('comment')
  //   expect(cardNumberAfter.length).toBe(1)
  // })

  // it('tests a card can be removed', () => {
  //   const titleInput = screen.getByLabelText('Title')
  //   userEvent.type(titleInput, 'The Scientist')

  //   const singerInput = screen.getByLabelText('Singer')
  //   userEvent.type(singerInput, 'Coldplay')

  //   const genreInput = screen.getByLabelText('Genre')
  //   userEvent.type(genreInput, 'Pop')

  //   const linkInput = screen.getByLabelText('Link')
  //   userEvent.type(linkInput, 'http://www.google.com')

  //   const formSubmitBtn = screen.getByRole('button', { name: 'Add' })
  //   userEvent.click(formSubmitBtn)

  //   const cardNumberBefore = screen.getAllByRole('comment')
  //   expect(cardNumberBefore.length).toBe(1)

  //   const cardDeleteBtn = screen.getAllByRole('button', {
  //     name: 'X',
  //   })
  //   userEvent.click(cardDeleteBtn[0])

  //   const cardNumberAfter = screen.queryAllByRole('comment')
  //   console.log('**==** ', cardNumberAfter)
  //   expect(cardNumberAfter.length).toBe(0)
  // })
})
