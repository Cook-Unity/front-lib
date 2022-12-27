import styled, {keyframes} from 'styled-components'

const expandCartControllers = keyframes`
  0% {
    width: 30px;
  }
  100% {
    width: 74px;
  }
`

export const Wrapper = styled.div`
  box-shadow: 0px 8px 16px rgba(35, 31, 32, 0.06);
  border-radius: 8px;
  overflow: hidden;
  height: 290px;
  width: 200px;
  color: black;
  border: 2px solid white;

  &.in-cart {
    border: 2px solid #47d178;
  }
`

export const WrapperTop = styled.div`
  height: 170px;
  position: relative;
`

export const WrapperFooter = styled.div`
  height: 120px;
  background-color: white;
  padding: 0 16px 16px;
`

export const ChefImage = styled.img`
  position: absolute;
  width: 32px;
  top: 10px;
  left: 16px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid #46d178;
  border: ${({type}) => (type === 'premium' ? '3px solid #46d178' : 'none')};
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
  display: flex;
`

export const PriceActionsWrapper = styled.div`
  display: flex;
  width: 139px;
  align-items: center;
  justify-content: flex-end;
  &.large {
    padding-left: 55px;
  }
`

export const StarWrapper = styled.div`
  width: 65px;
  height: 32px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  backdrop-filter: blur(8px);
  padding: 8px;
  display: flex;
  align-items: center;
  border-radius: 4px;
`

export const StarImg = styled.img`
  height: 13px;
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
  cursor: pointer;
`
export const ExtraPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 32px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 24px;
  color: #231f20;
  padding-right: 8px;
  width: max-content;
`
export const Button = styled.button`
  box-sizing: revert;
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
  //padding-left: 6px;
`

export const MealTitle = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  color: #231f20;
  width: 152px;
  padding-top: 16px;
  height: 48px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  cursor: pointer;
`

export const ImagenCTA = styled.img`
  width: 11px;
`

export const MealCartActionsWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 50px;
  width: 74px;
  height: 30px;
  overflow: hidden;
  white-space: nowrap;
  animation: ${expandCartControllers} 200ms;
`

export const MealCartActionRemove = styled.button`
  font-family: 'Gilroy Semibold', 'Roboto', sans-serif;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: white;
  border: 0px solid;
  margin: 0 2.5px;
  cursor: pointer;
  font-weight: bolder;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  padding: 0;
`

export const MealCartActionAdd = styled.button`
  font-family: 'Gilroy Semibold', 'Roboto', sans-serif;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: white;
  border: 0px solid;
  margin: 0 2.5px;
  cursor: pointer;
  font-weight: bolder;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  padding: 0;
`

export const MealCartActionQuantity = styled.span`
  font-family: 'Gilroy Semibold';
  width: 20px;
  display: inline-block;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImgMinus = styled.img`
  width: 11px;
`

export const ImgMore = styled.img`
  width: 11px;
`

export const ButtonQuantity = styled.button`
  font-family: 'Gilroy Semibold', 'Roboto', sans-serif;
  color: #ffffff;
  border: none;
  background: #47d178;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 0 2.5px;
  cursor: pointer;
  font-weight: bolder;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  padding: 0;
`

export const WarningTextWrapper = styled.div`
  width: 150px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgb(35 31 32 / 6%);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  position: absolute;
  top: 55px;
  right: 0;
  margin-left: 10px;
`

export const WarningText = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: #231f20;
`
