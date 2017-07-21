import React from 'react'

import Btn from './Components/Btn'
import Typography from './Components/Typography'
import FormElements from './Components/FormElements'

const App = () => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h1>Nebula Components</h1>
    </div>
    <Typography />
    <Btn />
    <FormElements />
  </section>
)

export default App
