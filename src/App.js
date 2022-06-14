import './components/Form'
import styles from './App.module.css'

import { List, Form, Title } from './components'

function App() {
  return (
    <div className={styles.appWrapper}>
      <Title />
      <Form />
      <List />
    </div>
  )
}

export default App
