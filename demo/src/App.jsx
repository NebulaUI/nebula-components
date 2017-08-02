import React from 'react'

import Buttons from './Components/Buttons'
import Typography from './Components/Typography'
import FormElements from './Components/FormElements'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import StatusCards from './Components/Cards/StatusCards'
import Flyouts from './Components/Flyouts'
import Tabs from './Components/Tabs'
import Modals from './Components/Modals'

const App = () => (
  <div>
    <Navbar />
    <section className="o-section-md" id="main-content">
      <div className="o-site-wrap o-site-wrap--padding">
        <h1>Nebula Components</h1>
      </div>
      <Typography />
      <Buttons />
      <FormElements />
      <Cards />
      <StatusCards />
      <Flyouts />
      <Tabs />
      <Modals />
    </section>
  </div>
)

export default App
