import Icon from '@mdi/react'
import PropTypes from 'prop-types';
import "./Button.css";

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
