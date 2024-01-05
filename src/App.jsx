import './App.css'
import PropertyList from './PropertyList';

function App() {

  const properties = [
    {id: 129031, name: "Desert Yurt", rating: 4.9, price: 1500},
    {id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 2500},
    {id: 129032, name: "Cactus Retreat", rating: 4.75, price: 3000},
    {id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 1200},
    {id: 129034, name: "Oceanview Condo", rating: 4.7, price: 1400},
    {id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 960}
  ]

  return (
    <>
      <PropertyList props={properties}/>
    </>
  )
}

export default App
