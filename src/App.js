import './components/Form'
import styles from './App.module.css'

import { Card, Form, Title } from './components'

function App() {
  return (
    <div className={styles.appWrapper}>
      <Title></Title>
      <Form></Form>
      <Card></Card>
    </div>
  )
}

export default App
