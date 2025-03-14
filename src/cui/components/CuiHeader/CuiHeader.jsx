import classNames from 'classnames'
import React from 'react'
import CuiLink from '../CuiLink/CuiLink'
import CuiButton from '../CuiButton/CuiButton'
import CuiIcon from '../CuiIcon/CuiIcon'
import CuiLogo from '../CuiLogo/CuiLogo'
import './CuiHeader.scss'

const CuiHeader = ({
  center,
  endPrimary,
  endSecondary,
  className,
  color = 'dark',
  showMenu = false,
  showLogo = true,
  showLogin = false,
  showNeedHelp = false,
  showNeedHelpTitle = false,
  homeLink = '/',
  onClickHelp,
  onClickMenu
}) => {
  const handleMenuClick = event => {
    if (onClickMenu) {
      onClickMenu(event)
    }
  }
  return (
    <header className={classNames('cui-header', color, className)}>
      <div className="brand">
        {showMenu && (
          <CuiIcon name="menu" role="button" onClick={handleMenuClick} />
        )}
        {showLogo && (
          <a className="logo" href={homeLink} title="CookUnity">
            <CuiLogo />
          </a>
        )}
      </div>
      {center && <div className="center">{center}</div>}
      <div className="end">
        {endPrimary}
        {showLogin && (
          <CuiLink
            className="login"
            color="light"
            fill="outline"
            showUnderline="true"
            href="/api/auth/login"
          >
            Login
          </CuiLink>
        )}
        {showNeedHelp && (
          <CuiButton
            className="need-help"
            color="light"
            fill="clear"
            onClick={onClickHelp}
          >
            <CuiIcon name="messageCircle" />
            {showNeedHelpTitle && <span>Need Help?</span>}
          </CuiButton>
        )}
        {endSecondary}
      </div>
    </header>
  )
}

export default CuiHeader
