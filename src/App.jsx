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
      <p>Preference is Alaska's only ALL VEGAN restaurant</p>
      <aside className='review'><Reviews /></aside>
      <Values />
      <div>
        {itemDetails.map(item => (
          <Menu items={item} />
        )
        )}
      </div>
      <footer className="flex-ctr">
        <a className="flex-ctr" href="https://www.facebook.com/PreferenceFoodtruck" target="_blank">Follow Us
          on Facebook</a>
      </footer>
    </div >
  )
}

export default App