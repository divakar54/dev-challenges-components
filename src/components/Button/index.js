// 1st approach, add css property for 
// each prop like this https://javascript.plainenglish.io/how-to-create-a-fully-customizable-button-component-in-react-8e286cb25712
// const Button = ({color = "blue",name = "name",size = "medium",type = null}) => {
//   return(
//    <div className="button-container">
//     <button className={`custom-button ${color} ${size} ${type}`}> {name}</button>
//    </div>
//   )
//   }
// in a separate Button.css file we can add the corresponding css classes

// 2nd approach, use styled components to create custom objects which can be mapped using props

// 3rd approach, think of something else !!!


import styled, { ThemeProvider } from 'styled-components'
import { color, space, fontSize, buttonStyle, variant, width } from 'styled-system'
import PropTypes from 'prop-types';

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes'
})

export const theme = {
  colors: {
    custom: '#444',
    yellow: 'yellow'
  },
 buttons: {
    primary: {
      color: 'white',
      backgroundColor: '#2962FF'
    },
    secondary: {
      color: 'white',
      backgroundColor: '#455A64'
    },
    danger: {
      color: 'white',
      backgroundColor: '#D32F2F'
    }  
  },
buttonSizes: {
    small: {
      fontSize: '14px',
      padding: `6px 0.95em`,
      width: '73px',
      heigh: '32px'
    },
    medium: {
      fontSize: '14px',
      padding: `8px 16px`,
      width: '81px',
      height: '36px'
    },
    large: {
      fontSize: '14px',
      padding: `11px 22px`,
      width: '93px',
      height: '42px'
    }
  }
}

const variantArray = {
  "text" : {
    cursor: 'default',
    backgroundColor: 'white',
    boxShadow: 'none'
  },
  "outline" : {
    borderWidth: '1px',
  }
}

const colorObject = {
  "primary": {
    color: 'white',
    backgroundColor: '#2962FF'
  },
  "secondary": {
    color: 'white',
    backgroundColor: '#455A64'
  },
  "danger": {
    color: 'white',
    backgroundColor: '#D32F2F'
  }
}

const sizeObject = {
  "sm": {
    width: '73px',
    height: '32px'
  },
  "md": {
    width: '81px',
    height: '36px'
  },
  "lg": {
    width: '93px',
    height: '42px'
  }
}

const defaultButtonStyle = {
  fontSize: '14px',
  padding: `8px 16px`,
  width: '81px',
  height: '36px',
  fontWeight: '500',
  backgroundColor: '#E0E0E0',
  borderRadius: '6px',
  borderWidth: '0px',
  borderColor: '',
  cursor: 'pointer',
  boxShadow: '0px 2px 3px 0px #33333333',
  position: 'relative'
}

export const Btn = (props) => {
  console.log(props);
  return(
    <button {...props}>
      text
    </button>
  )
}
export const Button = ({variant, color, size, text="Default", leftIcon, rightIcon, ...props}) => {
  console.log(props)
  const computedStyle = () => {
    const width = (leftIcon || rightIcon) && {width: '105px'};
    return{
      ...defaultButtonStyle,
      ...variantArray[variant],
      ...colorObject[color],
      ...sizeObject[size],
      ...width
    }
  }

  return(
    <button {...props} style={computedStyle()}>
     
      {leftIcon && 
        <Icon path={leftIcon} 
        className='left-icon'
        rotate={180}
        size={0.75}
        horizontal
        vertical />}
      {text}
      {rightIcon && 
        <Icon path={rightIcon} 
        className='right-icon'
        rotate={180}
        size={0.75}
        horizontal
        vertical />}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['text', 'outline']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

// Button.defaultProps = {
//   variant: 'primary',
//   backgroundColor: 'blue',
//   size: 'medium'
// }
