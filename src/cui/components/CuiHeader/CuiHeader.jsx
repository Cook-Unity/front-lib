import classNames from 'classnames'
import React from 'react'
import CuiLink from '../CuiLink/CuiLink'
import CuiButton from '../CuiButton/CuiButton'
import CuiIcon, {icons} from '../CuiIcon/CuiIcon'
import CuiLogo from '../CuiLogo/CuiLogo'
import './CuiHeader.scss'
import CuiAllyButton from '../CuiAllyButton/CuiAllyButton'

const CuiHeader = ({
  center,
  end,
  className,
  color = 'dark',
  showMenu = false,
  showLogin = false,
  showAllyButton = false,
  showNeedHelp = false,
  onClickHelp
}) => {
  const handleMenuClick = event => {
    console.log('event', event)
  }
  return (
    <header className={classNames('cui-header', color, className)}>
      <div className="brand">
        {showMenu && (
          <CuiIcon name="menu" role="button" onClick={handleMenuClick} />
        )}
        <CuiLogo />
      </div>
      {center && <div className="center">{center}</div>}
      <div className="end">
        {end}
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
        {showAllyButton && <CuiAllyButton />}
        {showNeedHelp && (
          <CuiButton
            className="need-help"
            color="light"
            fill="clear"
            onClick={onClickHelp}
          >
            <CuiIcon name="messageCircle" />
            <span>Need Help?</span>
          </CuiButton>
        )}
      </div>
    </header>
  )
}

export default CuiHeader
