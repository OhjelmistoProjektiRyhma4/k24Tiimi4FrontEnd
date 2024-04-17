import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TabsMUI from '../TabsMUI'
import Frontpage from '../components/Frontpage'

function App() {

  return (
    /*<div>

      <h1>Tähän tulee Woofstockin etusivu </h1>
    </div>*/

    <TabsMUI TabsMUI={Frontpage} />
  )






}

export default App




