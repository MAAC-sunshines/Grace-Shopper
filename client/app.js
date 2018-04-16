import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import AllProductsContainer from './components/AllProductsContainer';


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes /> Fill this in until we're ready to have login users?*/}
      <AllProductsContainer />
    </div>
  )
}

export default App
