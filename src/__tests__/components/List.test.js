import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from '../../components/List'

const testSongs = [
  {
    id: 'dmj57ehsn4rjd',
    title: 'Mamma Mia',
    singer: 'ABBA',
    genre: 'Pop',
    link: '',
    stars: 4,
  },
  {
    id: 'dj47sgakgo7aaaa',
    title: "Sweet Child O'Mine",
    singer: 'Guns and Roses',
    genre: 'Rock',
    link: '',
    stars: 5,
  },
]

describe('Title', () => {
  beforeEach(() => {
    render(<List songList={testSongs} />)
  })

  it('displays 6 card by default', () => {
    const cards = screen.getAllByRole('comment')
    expect(cards.length).toBe(2)
  })
})
