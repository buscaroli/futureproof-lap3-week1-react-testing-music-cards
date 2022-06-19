import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { getLyric } from '../../api/lyrics'
import LyricsForm from '../../components/LyricsForm'

describe('App', () => {
  const testText = [
    'This is a test Song',
    'Written for testing React',
    'Yeah ot is an Array',
    'and it comes with FOUR lines',
  ]

  // mocking the api that fetches the lyric
  jest.mock('../../api/lyrics')

  beforeEach(() => jest.resetAllMocks())

  it('tests there correct initial text is shown', () => {
    render(<LyricsForm />)
    const initialText = /No Lyrics/i
    const lyric = screen.getByTestId('lyric')
    expect(lyric.textContent).toMatch(initialText)
  })

  it('tests it shows the loading text', async () => {
    render(<LyricsForm />)
    const fetchBtn = screen.getByRole('button')
    userEvent.click(fetchBtn)

    const lyric = screen.getByTestId('lyric')
    expect(lyric.textContent).toMatch(/loading/i)
  })

  // it('tests it returns the string of a song', async () => {
  //   render(<LyricsForm />)

  //   const titleInput = screen.getByLabelText('Title')
  //   userEvent.type(titleInput, 'success')

  //   const singerInput = screen.getByLabelText('Singer')
  //   userEvent.type(singerInput, 'Test Singer')

  //   await getLyric('success', 'test singer')
  //   // const fetchBtn = screen.getByRole('button')
  //   // userEvent.click(fetchBtn)

  //   const lyric = screen.findByText('This is a test lyric')
  //   expect(lyric.textContent).toMatch(/test lyric/i)
  // })
})
