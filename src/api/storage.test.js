// NOT WORKING AS EXPECTED
// Based on https://bholmes.dev/blog/mocking-browser-apis-fetch-localstorage-dates-the-easy-way-with-jest/

import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

import { loadSongs, storeSongs } from './storage'

let mockSongs = {}

describe('App', () => {
  beforeAll(() => {
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      mockSongs[key] = value
    })
    global.Storage.prototype.getItem = jest.fn((key) => mockSongs[key])
  })

  beforeEach(() => {
    mockSongs = {}
    render(<App />, { wrapper: MemoryRouter })
  })

  afterAll(() => {
    global.Storage.prototype.setItem.mockReset()
    global.Storage.prototype.getItem.mockReset()
  })

  it('tests you can load data from localstorage', () => {
    const songs = [{ title: 'Hi there' }, { title: 'hello' }]
    // loadSongs()
    // console.log('** ', global.Storage.prototype.getItem('songs'))
    storeSongs(songs)
    storeSongs(songs)
    storeSongs(songs)

    expect(global.Storage.prototype.setItem).toHaveBeenCalled()
    loadSongs()
    expect(global.Storage.prototype.getItem).toHaveBeenCalled()
    // console.log('***************', global.Storage.prototype.getItem('songs'))
    // console.log(global.Storage.prototype.getItem('songs'))
  })
})
