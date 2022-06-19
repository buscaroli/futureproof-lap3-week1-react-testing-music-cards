export async function getLyric(title, singer = '') {
  const response = await new Promise((resolve, reject) => {
    if (title === 'fail') {
      reject('Test Fetch Error')
    } else {
      resolve(
        'This is a test lyric\nmade for testing LyricsForm\nand it is THREE lines long'
      )
    }
  })

  return response
}
