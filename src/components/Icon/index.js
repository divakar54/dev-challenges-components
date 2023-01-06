import React from 'react'
import Icon from '@mdi/react'
import "./Button.css"

const ButtonIcon = ({icon, iconClassName}) => {
  return (
    <div>
        <Icon path={icon} 
        className={iconClassName}
        rotate={180}
        size={0.75}
        horizontal
        vertical />
    </div>
  )
}

export default ButtonIcon