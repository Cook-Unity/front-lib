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
export const removeDoubleSlashes = str =>
  str.replace(/(https:\/\/)|(\/{2,})/g, (_, p1) => p1 || '/')

export const buildImageUrl = ({path, config = {}}) => {
  const {aspectRatio = null, blur = false, fit = 'crop', extras = null} = config
  let url = removeDoubleSlashes(path)
  const params = []

  if (config?.width) {
    params.push(`w=${config?.width}`)
  }

  if (config?.height && !aspectRatio) {
    params.push(`h=${config?.height}`)
  }

  if (aspectRatio && !config?.height) {
    params.push(`ar=${aspectRatio}&fit=${fit}`)
  }

  if (blur) {
    params.push(`blur=${blur}`)
  }

  if (params) {
    if (extras) {
      params.push(extras + '&auto=format')
    } else {
      params.push('auto=format')
    }

    url = `${url}?${params.join('&')}`
  }

  if (extras && !params) {
    url = `${url}?${extras}`
  }

  if (!extras && !params) {
    url = `${url}?auto=format`
  }

  return url
}
