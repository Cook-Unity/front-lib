export const getFirstAndSecondPhraseTitle = title => {
  const firstBreak = title.indexOf(' ')
  const firstPhrase = title.slice(0, firstBreak)
  const secondPhrase = title.slice(firstBreak + 1, title.length)
  return {firstPhrase, secondPhrase}
}
