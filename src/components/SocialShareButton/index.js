import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {toast} from 'react-toastify'
import CopyLink from '../../assets/images/copy-links.png'
import Facebook from '../../assets/images/facebook.png'
import Twitter from '../../assets/images/twitter.png'
import Email from '../../assets/images/email.png'

const Social = props => {
  const {url, title, onClickButton} = props

  return (
    <div className="social-links">
      <div className="social-link facebook">
        <a
          className="facebook"
          target="_blank"
          onClick={() => onClickButton('facebook')}
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
        >
          <img src={Facebook} alt="Facebook" className="facebook" />
        </a>
      </div>

      <div className="social-link">
        <a
          className="twitter"
          target="_blank"
          onClick={() => onClickButton('twitter')}
          href={`https://twitter.com/share?url=${encodeURIComponent(url)}`}
        >
          <img src={Twitter} alt="Twitter" className="twitter" />
        </a>
      </div>

      <div className="social-link ">
        <a
          className="copy-link"
          target="_blank"
          onClick={() => onClickButton('email')}
          href={`mailto:?subject=Enjoy ${title}&body=${encodeURIComponent(
            url
          )}`}
        >
          <img src={Email} alt="Email" className="email" />
        </a>
      </div>

      <div className="social-link ">
        <CopyToClipboard
          text={url}
          onCopy={() => {
            onClickButton('copy link')
            toast('Copied on clipboard!')
          }}
        >
          <img src={CopyLink} alt="Copy link" />
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default Social
