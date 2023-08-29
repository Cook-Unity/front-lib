export const webpSupport = () => {
  return new Promise(resolve => {
    let hasWebP = false
    const img = new window.Image()
    img.onload = () => {
      hasWebP = !!(img.height > 0 && img.width > 0)
      resolve(hasWebP)
    }
    img.onerror = () => {
      resolve(false)
    }
    img.src =
      'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA='
  })
}

export const fullImagePath = filename =>
  `https://static.cookunity.com/cross/front-lib/images/${filename}`

export const fullIconPath = filename => {
  // if (process.env.NODE_ENV === 'development') {
  //   return `http://localhost:6006/public/icons/${filename}`
  // }
  return `https://statics.cookunity.com/icons/${filename}`
}
