export const urlParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())

  return {
    urlSearchParams,
    params
  }
}
