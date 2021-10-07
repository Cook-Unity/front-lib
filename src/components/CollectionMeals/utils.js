export const getFirstAndSecondPhraseTitle = title => {
  const firstBreak = title.indexOf(' ')
  const firstPhrase = firstBreak > 0 ? title.slice(0, firstBreak) : title
  const secondPhrase =
    firstBreak > 0 ? title.slice(firstBreak + 1, title.length) : null
  return {firstPhrase, secondPhrase}
}
