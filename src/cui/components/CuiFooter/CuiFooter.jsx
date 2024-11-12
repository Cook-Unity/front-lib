import classNames from 'classnames'
import React, {useEffect, useState} from 'react'
import CuiIcon from '../CuiIcon/CuiIcon'
import CuiLink from '../CuiLink/CuiLink'
import CuiLogo from '../CuiLogo/CuiLogo'
import './CuiFooter.scss'

const items = [
  {label: 'How it works', href: 'how-it-works'},
  {label: 'Careers', href: 'careers'},
  {label: 'Why CookUnity', href: 'why-cookunity'},
  {label: 'Delivery Map', href: 'delivery-map'},
  {
    label: 'FAQs ',
    href: 'https://support.cookunity.com',
    attrs: {target: '_blank', rel: 'noopener noreferrer'}
  },
  {label: 'Gift Card', href: 'gift-cards'},
  {label: 'Become a chef', href: 'become-a-chef'},
  {label: 'Sustainability', href: 'sustainability'},
  {label: 'Blog', href: 'blog'},
  {
    label: 'CookUnity for Business',
    href: 'https://business.cookunity.com'
  }
]
const socialNetworks = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/cookunity',
    icon: 'linkedin'
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/cookunity',
    icon: 'instagram'
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/Cookunity.us',
    icon: 'facebook'
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/Cookunity',
    icon: 'twitter'
  }
]

const getHref = (value, baseUrl) =>
  value.startsWith('http')
    ? value
    : `${baseUrl || 'https://cookunity.com/'}${value}`

const CuiFooter = ({
  className,
  homeLink = '/',
  baseUrl,
  isGovXEnabled = false,
  email = 'support@cookunity.com'
}) => {
  const [footerItems, setFooterItems] = useState([])
  const year = new Date().getFullYear()
  useEffect(() => {
    if (isGovXEnabled) {
      setFooterItems([
        ...items,
        {label: 'GovX benefits', href: 'lp/govxverification'}
      ])
    } else {
      setFooterItems(items)
    }
  }, [])

  return (
    <footer className={classNames('cui-footer', className)}>
      <div className="headline">
        <h3 className="title">
          Hot Chefs.
          <span>Hundreds of dishes.</span>
        </h3>
        <h4 className="subtitle">Nothing boring.</h4>
      </div>
      <ul className="nav-options">
        {footerItems.map(({label, href, attrs = {}}, index) => (
          <li key={index} className="nav-option">
            <CuiLink
              color="light"
              fill="clear"
              href={getHref(href, baseUrl)}
              {...attrs}
            >
              {label}
            </CuiLink>
          </li>
        ))}
      </ul>
      <div className="contact">
        <a className="logo" href={homeLink} title="CookUnity">
          <CuiLogo />
        </a>
        <CuiLink color="light" fill="clear" href={`mailto:${email}`}>
          {email}
        </CuiLink>
        <div className="social-networks">
          {socialNetworks.map(value => (
            <a
              key={value.name}
              title={`Open ${value.name}`}
              target="_blank"
              href={value.link}
              rel="noreferrer"
            >
              <CuiIcon name={value.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="legals">
        <div className="stores-badges">
          <a
            title="Download on the App Store"
            target="_blank"
            href="https://itunes.apple.com/us/app/cookunity/id1103061273?mt=8"
            rel="noreferrer"
          >
            <CuiIcon name="appleStore" />
          </a>
          <a
            title="Download on the App Store"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.cookunity.android.app"
            rel="noreferrer"
          >
            <CuiIcon name="playStore" />
          </a>
        </div>
        <div className="copyright">
          <p>© Copyright {year} CookUnity</p>
          <CuiLink color="light" fill="clear" href={getHref('terms', baseUrl)}>
            Terms & Conditions
          </CuiLink>
          <CuiLink
            color="light"
            fill="clear"
            href={getHref('privacy-policy', baseUrl)}
          >
            Privacy Policy
          </CuiLink>
        </div>
        <div className="repatcha-legal">
          This site is protected by reCAPTCHA and the Google <br />
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Service
          </a>{' '}
          apply.
        </div>
      </div>
    </footer>
  )
}

export default CuiFooter
