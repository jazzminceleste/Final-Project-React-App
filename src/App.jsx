import itemDetails from './components/itemdetails'

import Menu from './components/Menu'
import Reviews from './components/Reviews'
import Nav from './components/Nav'
import Values from './components/Values'
import './App.css'

const App = () => {
  console.table(itemDetails)
  return (
    <div>
      <Nav />
    </div>
  )
}

export default App