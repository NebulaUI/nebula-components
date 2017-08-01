import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const TabPanel = ({ children, className }) => <div className={classNames('c-tab__panel', className)}>{children}</div>

TabPanel.propTypes = {
  className: T.string,
  children: T.node,
}

export default TabPanel
