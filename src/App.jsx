import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'

const arrayColors = [
  '#586B22',
  '#D6C861',
  '#FFAD84',
  '#2CB7EE',
  '#F8772E',
  '#CCCCFF',
  '#494f4e',
  '#ff2071',
  '#22dba8',
  '#690059'

]

function App() {

  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  const getElementRandom = array => {
    const i = createNumberRandom(array)
    return array[i]
  }

  const [quoteRandom, setQuoteRandom] = useState(getElementRandom(quotes))
  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors))

  const clickButton = () => {
    setQuoteRandom(getElementRandom(quotes))
    setColorRandom(getElementRandom(arrayColors))
  }

  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <QuoteBox
        quoteRandom={quoteRandom}
        colorRandom={colorRandom}
        clickButton={clickButton}
      />
    </div>
  )
}

export default App
