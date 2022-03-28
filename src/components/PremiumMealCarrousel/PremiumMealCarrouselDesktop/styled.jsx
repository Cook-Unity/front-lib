import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #231f20;
  height: 388px;
  max-width: 1296px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://cu-product-media.s3.amazonaws.com/media/merchandiseSets/diamons_premium_line.png');
    background-repeat: no-repeat;
    opacity: 0.4;
  }
`
export const WrapperContent = styled.div`
  float: left;
  padding-top: 88px;
  padding-left: 112px;
  padding-right: 25px;
  width: 302px;
`

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
`

export const SeeAll = styled.div`
  padding-top: 24px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600px;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
`

export const WrapperNavigation = styled.div`
  padding-top: 18px;
`
export const ArrowLeft = styled.img`
  padding-right: 12px;
`

export const ArrowRight = styled.img``

export const WrapperSlide = styled.div`
  padding-top: 24px;
`

export const GradientEnd = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 113px;
  background: linear-gradient(270deg, #231f20 0%, rgba(35, 31, 32, 0) 100%);
  opacity: 0.7;
  z-index: 1;
`
export const GradientStart = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 113px;
  background: linear-gradient(270deg, #231f20 0%, rgba(35, 31, 32, 0) 100%);
  opacity: 0.7;
  transform: rotate(-180deg);
  opacity: 0.7;
  z-index: 1;
`
