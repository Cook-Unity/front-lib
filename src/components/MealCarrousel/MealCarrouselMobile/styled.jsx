import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${({theme}) => (theme === 'dark' ? '#231f20' : '#E6FBF0')};
  color: ${({theme}) => (theme === 'dark' ? 'white' : '#231F20')};
  background-image: ${({type}) =>
    type === 'premium'
      ? "url('https://cu-product-media.s3.amazonaws.com/media/merchandiseSets/bg_diamond.png')"
      : "url('https://static.cookunity.com/cross/front-lib/images/sidesbg.png')"};
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 24px;
  border-radius: 8px;
`

export const WrapperContent = styled.div`
  padding: 24px;
`

export const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 44px;
  margin-bottom: 16px;
`

export const Subtitle = styled.div`
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 800;
  line-height: 22px;
  margin-bottom: 8px;
  cursor: pointer;
  text-decoration: underline;
  text-transform: uppercase;
`

export const SeeAll = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
  cursor: pointer;
`
