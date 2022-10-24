import styled from 'styled-components'

export const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;
`
export const TooltipContent = styled.div`
  position: absolute;
  border-radius: 4px;
  right: 0;
  padding: 16px;
  width: 250px;
  margin-top: 12px;
  background-color: #4d4d4f;
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  z-index: 2;
  &:after {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 15px;
    margin-left: -8px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #4d4d4f transparent;
  }
`
