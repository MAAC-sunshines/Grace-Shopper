import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import AllInstrumentsContainer from './containers/AllInstrumentsContainer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <AllInstrumentsContainer />
    </div>
  )
}

export default App
