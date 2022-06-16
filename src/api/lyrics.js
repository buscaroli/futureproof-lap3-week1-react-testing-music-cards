import axios from 'axios'

export async function getLyric(title, singer = '') {
  const url = `https://api.lyrics.ovh/v1/${singer}/${title}`

  try {
    const { data } = await axios(url)

    return data.lyrics
  } catch (err) {
    console.log('Error: ', err)
    throw new Error(err)
  }
}
