import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #231f20;
  height: 517px;
  max-width: 375px;
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
  padding-top: 16px;
  padding-left: 18px;
  padding-right: 16px;
`

export const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 44px;
`
export const SeeAll = styled.div`
  padding-top: 8px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
`
