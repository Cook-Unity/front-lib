import classNames from 'classnames'
import React from 'react'
import CuiLink from '../CuiLink/CuiLink'
import CuiIcon from '../CuiIcon/CuiIcon'
import CuiLogo from '../CuiLogo/CuiLogo'
import './CuiHeader.scss'

const CuiHeader = ({
  className,
  color = 'dark',
  showMenuIcon = true,
  showLogin = true
}) => {
  return (
    <header className={classNames('cui-header', color)}>
      <div className="brand">
        {showMenuIcon && <CuiIcon name="menu" />}
        <CuiLogo />
      </div>
      <div className="steps">
        Stepers
        {/* Breadcrumbs */}
        {/* Mobile / Desktop */}
      </div>
      <div className="end">
        {showLogin && (
          <CuiLink
            color="light"
            fill="outline"
            showUnderline="true"
            href="/api/auth/login"
          >
            Login
          </CuiLink>
        )}
      </div>
    </header>
  )
}

export default CuiHeader
