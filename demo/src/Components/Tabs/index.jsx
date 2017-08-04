import React from 'react'

import List from './List'
import Tabs from './Tabs'
import Tab from './Tab'
import Panels from './Panels'
import Panel from './Panel'

const animals = [
  {
    name: 'Tab 1',
    description: 'Tab 1 content',
  },
  {
    name: 'Tab 2',
    description: 'Tab 2 content',
  },
  {
    name: 'Tab 3',
    description: 'Tab 3 content',
    // disabled: true,
  },
  {
    name: 'Tab 4',
    description: 'Tab 4 content',
  },
  {
    name: 'Tab 5',
    description: 'Tab 5 content',
  },
  {
    name: 'Tab 6',
    description: 'Tab 6 content',
  },
  {
    name: 'Tab 7',
    description: 'Tab 7 content',
  },
  {
    name: 'Tab 8',
    description: 'Tab 8 content',
  },
  {
    name: 'Tab 9',
    description: 'Tab 9 content',
  },
]

const MyTabs = () => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h4>Tabs</h4>
      <Tabs>
        <List>
          {animals.map(({ disabled, name }) =>
            <Tab key={name} disabled={disabled}>{name}</Tab>)}
        </List>
        <Panels>
          {animals.map(({ disabled, description }) => (
            <Panel
              className="c-card"
              key={description}
              disabled={disabled}
            >
              {description}
            </Panel>
          ))}
        </Panels>
      </Tabs>
    </div>
  </section>
)

export default MyTabs
