import classNames from 'classnames'
import React, {useEffect, useState} from 'react'
import './CuiIcon.scss'
import {icons} from './icons'

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
