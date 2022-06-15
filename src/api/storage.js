export function storeSongs(arr) {
  localStorage.setItem('songs', JSON.stringify(arr))
}

export function loadSongs() {
  const songs = localStorage.getItem('songs')

  const data = !songs ? [] : JSON.parse(songs)

  return data
}
