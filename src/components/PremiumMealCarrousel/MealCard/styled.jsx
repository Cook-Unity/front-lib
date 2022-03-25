import styled from 'styled-components'

export const Wrapper = styled.div`
  box-shadow: 0px 8px 16px rgba(35, 31, 32, 0.06);
  border-radius: 8px;
  height: 340px;
  width: 222px;
  color: black;
`

export const WrapperTop = styled.div`
  height: 212px;
  position: relative;
`

export const WrapperFooter = styled.div`
  height: 128px;
  background-color: white;
  padding-left: 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

export const ChefImage = styled.img`
  position: absolute;
  width: 32px;
  top: 10px;
  left: 16px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid #46d178;
  overflow: hidden;
`

export const WarningMessage = styled.button`
  position: absolute;
  background: unset;
  border-radius: 200px;
  right: 17.5px;
  top: 17.5px;
  border: none;
  cursor: pointer;
  outline: none;
`

export const WarningImage = styled.img``

export const WrapperAction = styled.div`
  padding-top: 16px;
  display: flex;
`

export const StarWrapper = styled.div`
  width: 63px;
  height: 32px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  backdrop-filter: blur(8px);
  border-radius: 18px;
  display: flex;
  align-items: center;
`

export const StarImg = styled.img`
  width: 13.3px;
  height: 12.67px;
  padding-left: 14px;
`

export const RatingText = styled.span`
  padding-left: 8px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
  color: #231f20;
  padding-top: 2px;
`

export const WrapperContent = styled.div`
  max-width: 155px;
`

export const MealPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
export const ExtraPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 39px;
  height: 32px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 24px;
  color: #231f20;
  padding-left: 48px;
  padding-right: 6px;
`
export const Button = styled.button`
  background-color: #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 0px solid;
  cursor: pointer;
  font-weight: bolder;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  padding-left: 6px;
`

export const MealTitle = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  color: #231f20;
  width: 190px;
  padding-top: 16px;
  height: 48px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`

export const ImagenCTA = styled.img`
  width: 11px;
`
