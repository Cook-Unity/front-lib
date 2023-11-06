import classNames from 'classnames'
import React, {useEffect, useState} from 'react'

import {icons} from './icons'
import './CuiIcon.scss'

export const iconContent = new Map()
const requests = new Map()

export const getSvgContent = url => {
  // see if we already have a request for this url
  let req = requests.get(url)

  if (!req) {
    if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
      // we don't already have a request
      // eslint-disable-next-line no-undef
      req = fetch(url).then(rsp => {
        if (rsp.ok) {
          return rsp.text().then(svgContent => {
            iconContent.set(url, svgContent || '')
          })
        }
        iconContent.set(url, '')
      })

      // cache for the same requests
      requests.set(url, req)
    } else {
      // set to empty for ssr scenarios and resolve promise
      iconContent.set(url, '')
      return Promise.resolve()
    }
  }

  return req
}

const CuiIcon = ({name, path, role = 'icon', className, onClick}) => {
  const [svg, setSvg] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isErrored, setIsErrored] = useState(false)

  useEffect(() => {
    const url = path || icons[name]
    if (!url) {
      console.error('Icon not found')
      return
    }

    getSvgContent(url)
      .then(() => setSvg(iconContent.get(url)))
      .catch(setIsErrored)
      .then(() => setIsLoaded(true))
  }, [name, path])

  const onClickHandle = event => {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <span
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
