import Helmet from 'react-helmet'
import React from 'react'

export default function MetaTags({title, description, image}) {
  const defaultTitle = 'Your private chef | CookUnity'
  const defaultDescription =
    'CookUnity offers flexible and convenient subscription plans that match your needs and taste. Find out more and start eating healthy every day, today.'
  const defaultImage =
    'https://static.cookunity.com/growth/media/cookunity-default.jpg'

  return (
    <Helmet>
      {/* { <!-- HTML Meta Tags -->} */}
      <title>{title ? `${title} | CookUnity` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content={title || defaultTitle} />
      <meta
        itemProp="description"
        content={description || defaultDescription}
      />
      <meta itemProp="image" content={image || defaultImage} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={title ? `${title} | CookUnity` : defaultTitle}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title ? `${title} | CookUnity` : defaultTitle}
      />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  )
}
