import styled, { ThemeProvider } from 'styled-components'
import { color, space, fontSize, buttonStyle, variant, width } from 'styled-system'
import PropTypes from 'prop-types';

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes'
})

// export const theme = {
//   colors: {
//     custom: '#444',
//     yellow: 'yellow'
//   },
//  buttons: {
//     primary: {
//       color: 'white',
//       backgroundColor: '#2962FF'
//     },
//     secondary: {
//       color: 'white',
//       backgroundColor: '#455A64'
//     },
//     danger: {
//       color: 'white',
//       backgroundColor: '#D32F2F'
//     }  
//   },
// buttonSizes: {
//     small: {
//       fontSize: '14px',
//       padding: `6px 0.95em`,
//       width: '73px',
//       heigh: '32px'
//     },
//     medium: {
//       fontSize: '14px',
//       padding: `8px 16px`,
//       width: '81px',
//       height: '36px'
//     },
//     large: {
//       fontSize: '14px',
//       padding: `11px 22px`,
//       width: '93px',
//       height: '42px'
//     }
//   }
// }

const variantArray = {
  "text" : {
    cursor: 'default',
    backgroundColor: 'white'
  },
  "outline" : {
    borderWidth: '1px',
  }
}
const defaultButtonStyle = {
  fontSize: '14px',
  padding: `8px 16px`,
  width: '81px',
  height: '36px',
  backgroundColor: '#E0E0E0',
  borderRadius: '6px',
  borderWidth: '0px',
  borderColor: '',
  cursor: 'pointer'
}

export const Button = ({variant, color, size, text="Default"}) => {

  const computedStyle = () => {
    return{
      ...defaultButtonStyle,
      ...variantArray[variant],
    }
  }
  return(
    <button style={computedStyle()}>
      {text}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['text', 'outline']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

Button.defaultProps = {
  variant: 'primary',
  backgroundColor: 'blue',
  size: 'medium'
}
