import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TabContent = ({ tabs, isActive, id, handleClick }) => (
  <div>
    <div id="tabTwo">
      <p>Tab 1 content</p>
    </div>
    <div id="tabTwo">
      <p>Tab 2 content</p>
    </div>
  </div>
)

TabContent.propTypes = {
  tabs: PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }),
}

export default TabContent
