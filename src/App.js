import {Button, Btn} from "./components/Button"
import { mdiAccount, mdiBabyBuggyOff, mdiBatteryLow } from '@mdi/js'
import './App.css';

const App = () => {
  const buttonStyle = {
    display : 'flex',
    flexDirection : 'column',
    gap: '2em',
    margin : '2em'
  }
  return (

      <div style={buttonStyle}>

      {/* <Button color='primary' size='large'>Default</Button>
      <Button color='secondary' size='small'>Default</Button>
      <Button color='danger' size='small'>Default</Button> */}

      <Button />
      <Button variant="text" />
      <Button variant="outline" leftIcon={mdiAccount} />
      <Button variant="outline" rightIcon={mdiBatteryLow} />
      <Button color="primary" size="lg"/>
      <Button color="secondary" />
      <Button color="danger" disabled size="lg" rightIcon={mdiBatteryLow}/>
      <Btn variant="text" size="lg" disabled color="primary" />
      </div>

  )
}

export default App;
