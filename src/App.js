import './components/Form'
import styles from './App.module.css'

import Title from './components/Title'
import Form from './components/Form'

function App() {
  return (
    <div className={styles.appWrapper}>
      <Title></Title>
      <Form></Form>
    </div>
  )
}

export default App
