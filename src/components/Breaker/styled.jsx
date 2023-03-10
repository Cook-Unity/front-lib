import styled from 'styled-components'
import {device} from '../../utils/device'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  @media ${device.tablet} {
    flex-direction: column;
  }
`

export const ImageSection = styled.img`
  max-width: 270px;
  height: 150px;
  border-radius: 4px;
  margin-right: 24px;
  @media ${device.tablet} {
    margin-right: 0;
    margin-bottom: 13px;
    min-width: 100%;
  }
`

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  color: #000000;
  justify-content: center;
`

export const Title = styled.div`
  font-family: Gilroy Semibold;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 8px;
`

export const Subtitle = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`
