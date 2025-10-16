import AntdButton from './components/AntdButton/AntdButton'
import Button from './components/Button/Button'
import { ThemeProvider } from './providers/ThemeProvider'

function App() {

  return (
    <ThemeProvider>
      <p>hello world</p>
      <p>
      <Button variant='primary'>
        Click me
      </Button>

      <Button variant='secondary'>
        Click me
      </Button>

      <Button variant='outline'>
        Click me
      </Button>
      <br />
      </p>
      <div>
        <AntdButton />
      </div>
    </ThemeProvider>
  )
}

export default App
