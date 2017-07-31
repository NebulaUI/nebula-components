import React from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab'
import TabsContent from './TabsContent'

const Tabs = ({ tabs, isActive, id, handleClick }) => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h4>Tabs</h4>
      <div className="o-grid o-grid--gutter-md o-grid--matrix">
        <Tab />
        <TabsContent />
      </div>
    </div>
  </section>
)

Tabs.propTypes = {
  tabs: PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }),
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Tabs
