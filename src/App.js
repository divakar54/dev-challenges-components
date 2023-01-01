import logo from './logo.svg';
import { ThemeProvider } from 'styled-components'
import {theme, Button} from "./components/Button"
import './App.css';

const App = () => {
  const buttonStyle = {
    display : 'flex',
    flexDirection : 'column',
    gap: '2em',
    margin : '2em'
  }
  return (
    <ThemeProvider theme={theme}>
      <div style={buttonStyle}>

      {/* <Button color='primary' size='large'>Default</Button>
      <Button color='secondary' size='small'>Default</Button>
      <Button color='danger' size='small'>Default</Button> */}

      <Button />
      <Button variant="text" />
      <Button variant="outline" />
      </div>
    </ThemeProvider>
  )
}

export default App;
