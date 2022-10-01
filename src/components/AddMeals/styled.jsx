import styled from 'styled-components'; 
import { device } from '../../utils/mediaQueries'
import { MEAL_STATUS } from './constants';

const getStatusColor = (status) => {
  if (status===MEAL_STATUS.NOT_AVAILABLE) return '#EE5744'
  else if (status===MEAL_STATUS.AVAILABLE) return '#A8A8A8'
  else return '#79D6A7'
}

export const Wrapper = styled.div`
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 8px;
  padding: 60px;
  @media ${device.tablet} {
    padding: 16px;
  }
`
Wrapper.displayName = 'Wrapper'

export const Header = styled.div`
  display: flex;
  margin-bottom: 38px;
  align-items: center;
`
Header.displayName = 'Header'

export const WrapperTitle = styled.div`
`
WrapperTitle.displayName = 'WrapperTitle'

export const Photo = styled.img.attrs(({src}) => {
  src
})`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  position: relative;
  max-height: 73px;
  margin-right: 16px;
  box-shadow: 0px 0px 6px rgba(35, 31, 32, 0.1), 0px 2px 6px rgba(35, 31, 32, 0.05);
  border-radius: 12px;
  height: 73px;
  width: 30%;
  max-width: 100px;
`
Photo.displayName = 'Photo'

export const Title = styled.div`
  font-weight: 800;
  font-size: 32px;
  line-height: 36px;
  color: #231F20;
  font-family: 'Gilroy';
  @media ${device.tablet} {
    font-size: 24px;
  }
`
Title.displayName = 'Title'

export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #231F20;
  font-family: 'Roboto';
  margin-bottom: 8px
`
Subtitle.displayName = 'Subtitle'

export const Description = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 170%;
  font-family: 'Roboto';
  padding-bottom: 16px;
  @media ${device.tablet} {
    font-size: 14px;
  }
`
Description.displayName = 'Description'

export const DateBox = styled.div`
  border: 1px solid #DDDDDD;
  border-radius: 0px 0px 8px 8px;
  background: #F5F5F5;
  padding: 20px 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 3px solid ${({status}) => getStatusColor(status)};
  width: 100%;
  @media ${device.tablet} {
    width: auto;
  }
`
DateBox.displayName = 'DateBox'

export const DateTitle = styled.div`
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  color: #231F20;
  font-family: 'Gilroy';
  width: 100%;
  padding-bottom: 8px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 20px;
  }
`
DateTitle.displayName = 'DateTitle'

export const Status = styled.div`
  background: ${({status}) => getStatusColor(status)};
  border-radius: 2px;
  padding: 4px 8px;
  font-family: 'Gilroy';
  font-size: 13px;
  color: #fff;
`
Status.displayName = 'Added'

export const DateBoxWrapper = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 8px;
  }
  @media ${device.tablet} {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
`
DateBoxWrapper.displayName = 'DateBoxWrapper'
