import React from 'react'

import TabList from './TabList'
import TabPanel from './TabPanel'
import Tab from './Tab'
import TabPanels from './TabPanels'
import Tabs from './Tabs'

const animals = [
  {
    name: 'Cats',
    description: 'A domestic and lazy animal',
    disabled: true,
  }, {
    name: 'Dogs',
    description: 'Likes eating bones',
  },
  {
    name: 'Fish',
    description: 'Likes swimming',
  },
  {
    name: 'Spider',
    description: 'Likes eating flies',
  },
  {
    name: 'Spider asdfdafsafsf fasdfdsafadsfdsaffadsf',
    description: 'Likes eating flies',
  },
]

const MyTabs = () => (
  <Tabs>
    <TabList>
      {animals.map(({ disabled, name }) =>
        <Tab key={name} disabled={disabled}>{name}</Tab>)}
    </TabList>
    <TabPanels>
      {animals.map(({ disabled, description }) =>
        <TabPanel key={description} disabled={disabled}>{description}</TabPanel>)}
    </TabPanels>
  </Tabs>
)

export default MyTabs
