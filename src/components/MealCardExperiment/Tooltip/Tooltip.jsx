import React, {useState} from 'react'

import {TooltipContainer, TooltipContent} from './styled'

const Tooltip = ({content, children}) => {
  const [show, setShow] = useState(false)

  return (
    <TooltipContainer onClick={() => setShow(!show)}>
      {children}
      {show && <TooltipContent>{content}</TooltipContent>}
    </TooltipContainer>
  )
}

export default Tooltip
