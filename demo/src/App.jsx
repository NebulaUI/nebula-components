import React from 'react'

import Buttons from './Components/Buttons'
import Typography from './Components/Typography'
import FormElements from './Components/FormElements'
import Navbar from './Components/Navbar'

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
    </section>
  </div>
)

export default App
