import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${({theme}) => (theme === 'dark' ? '#231f20' : '#E6FBF0')};
  color: ${({theme}) => (theme === 'dark' ? 'white' : '#231F20')};
  height: 338px;
  max-width: 1296px;
  background-image: ${({type}) =>
    type === 'premium'
      ? "url('https://cu-product-media.s3.amazonaws.com/media/merchandiseSets/bg_diamond.png')"
      : "url('https://static.cookunity.com/cross/front-lib/images/sidesbg.png')"};
  background-repeat: no-repeat;
  background-size: contain;
`
export const WrapperContent = styled.div`
  float: left;
  width: 300px;
  padding: 24px;
`

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  margin-top: 8px;
`
export const Subtitle = styled.div`
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 800;
  line-height: 22px;
  margin-top: 16px;
  cursor: pointer;
  text-decoration-line: underline;
  text-transform: uppercase;
`

export const SeeAll = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600px;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
  cursor: pointer;
`

export const WrapperNavigation = styled.div`
  margin: 24px 0;
`
export const ArrowLeft = styled.img`
  cursor: pointer;
  padding-right: 12px;
  &.disabled {
    opacity: 0.5;
  }
`

export const ArrowRight = styled.img`
  cursor: pointer;

  &.disabled {
    opacity: 0.5;
  }
`

export const WrapperSlide = styled.div`
  height: 290px;
  padding-top: 24px;
`

export const GradientEnd = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 60px;
  background: ${({theme}) =>
    theme === 'dark'
      ? 'linear-gradient(270deg, #231f20 0%, rgba(35, 31, 32, 0) 100%)'
      : 'none'};
  opacity: 0.7;
  z-index: 1;
`
export const GradientStart = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 113px;
  background: ${({theme}) =>
    theme === 'dark'
      ? 'linear-gradient(270deg, #231f20 0%, rgba(35, 31, 32, 0) 100%)'
      : 'none'};
  opacity: 0.7;
  transform: rotate(-180deg);
  opacity: 0.7;
  z-index: 1;
`
