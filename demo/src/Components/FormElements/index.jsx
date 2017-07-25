import React from 'react'

import TextInput from './TextInput'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Select from './Select'
import Search from './Search'

const FormElements = () => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h2>Form elements</h2>
      <TextInput />
      <Search />
      <Checkbox />
      <Radio />
      <Select />
    </div>
  </section>
)

export default FormElements
