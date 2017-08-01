import React from 'react'

import List from './List'
import Tabs from './Tabs'
import Tab from './Tab'
import Panels from './Panels'
import Panel from './Panel'

const animals = [
  {
    name: 'Cats',
    description: 'A domestic and lazy animal',
  }, {
    name: 'Dogs',
    description: 'Likes eating bones',
  },
  {
    name: 'Fish',
    description: 'Likes swimming',
    // disabled: true,
  },
  {
    name: 'Spider',
    description: 'Likes eating flies',
  },
  {
    name: 'Horse',
    description: 'Likes eating flies',
  },
  {
    name: 'Pig',
    description: 'Likes eating flies',
  },
  {
    name: 'Elephant',
    description: 'Likes eating flies',
  },
  {
    name: 'Giraffe',
    description: 'Likes eating flies',
  },
  {
    name: 'Hippo',
    description: 'Likes eating flies',
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
