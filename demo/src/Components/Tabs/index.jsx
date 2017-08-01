import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

import TabList from './TabList'
import Tabs from './Tabs'
import Tab from './Tab'
import TabPanels from './TabPanels'
import TabPanel from './TabPanel'

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

const MyTabs = ({ className }) => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h4>Tabs</h4>
      <div className="o-grid o-grid--gutter-md o-grid--matrix">
        <div className={classNames('o-grid__item u-1/2@sm c-tabs-container', className)}>
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
        </div>
      </div>
    </div>
  </section>
)

MyTabs.propTypes = {
  className: T.string,
}

export default MyTabs
