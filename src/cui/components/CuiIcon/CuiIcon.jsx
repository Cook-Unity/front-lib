import classNames from 'classnames'
import React, {useEffect, useState} from 'react'
import './CuiIcon.scss'

const imageUrl = filename =>
  `https://static.cookunity.com/cross/front-lib/images/${filename}`

export const icons = {
  heart: imageUrl('heart.svg'),
  alert: imageUrl('alert-circle.svg'),
  star: imageUrl('star.svg')
}

const CuiIcon = ({name, path, className, ...props}) => {
  const [svg, setSvg] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isErrored, setIsErrored] = useState(false)

  useEffect(() => {
    fetch(path || icons[name])
      .then(res => res.text())
      .then(setSvg)
      .catch(setIsErrored)
      .then(() => setIsLoaded(true))
  }, [name, path])

  return (
    <div
      className={classNames(
        'cui-icon',
        `cui-icon-${isLoaded ? 'loaded' : 'loading'} ${
          isErrored ? 'cui-icon-errored' : ''
        }`
      )}
      dangerouslySetInnerHTML={{__html: svg}}
    />
  )
}

export default CuiIcon
