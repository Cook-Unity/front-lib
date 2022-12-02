import classNames from 'classnames'
import React, {useEffect, useState} from 'react'
import './CuiIcon.scss'

const imageUrl = filename =>
  `https://static.cookunity.com/cross/front-lib/icons/${filename}`

export const icons = {
  alert: imageUrl('alert-circle.svg'),
  checkmarkCircle2: imageUrl('checkmark-circle-2.svg'),
  chevronRight: imageUrl('chevron-right.svg'),
  heart: imageUrl('heart.svg'),
  messageCircle: imageUrl('message-circle.svg'),
  menu: imageUrl('menu.svg'),
  plus: imageUrl('plus.svg'),
  percent: imageUrl('percent.svg'),
  star: imageUrl('star.svg'),
  alertTriangle: imageUrl('alert-triangle.svg'),
  trash: imageUrl('trash.svg'),
  info: imageUrl('info.svg'),
  allDone: imageUrl('all-done.svg'),
  slickPrev: imageUrl('slick-prev.svg'),
  slickNext: imageUrl('slick-next.svg')
}

const CuiIcon = ({name, path, role = 'icon', className, onClick}) => {
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

  const onClickHandle = event => {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <div
      className={classNames(
        'cui-icon',
        `cui-icon-${isLoaded ? 'loaded' : 'loading'}`,
        isErrored && 'cui-icon-errored',
        role,
        className
      )}
      onClick={onClickHandle}
      dangerouslySetInnerHTML={{__html: svg}}
    />
  )
}

export default CuiIcon
