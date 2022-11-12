import React from 'react'
import PropTypes from 'prop-types'
import {Wrapper, ImageSection, TextSection, Title, Subtitle} from './styled'

const Breaker = ({title, description, imageUrl}) => {
  return (
    <Wrapper>
      <ImageSection src={imageUrl} />
      <TextSection>
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
      </TextSection>
    </Wrapper>
  )
}

Breaker.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string
}
export default Breaker
