import React from 'react'
import T from 'prop-types'

const OpenModal = ({ open }) => (
  <div className="o-site-wrap o-site-wrap--padding">
    <h2>Modal</h2>
    <button className="c-btn c-btn--alpha c-btn--md" onClick={open}>
      Open modal
    </button>
  </div>
)

OpenModal.propTypes = {
  open: T.func,
}

export default OpenModal
