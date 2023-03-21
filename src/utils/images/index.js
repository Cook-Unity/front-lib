export function webpSupport() {
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
