import React from 'react'
import T from 'prop-types'

import Modal from './'

const ModalExample = ({ isOpen, close }) => (
  <div>
    <Modal isOpen={isOpen} close={close}>
      <p>This is modal content</p>
      <p>This is modal content</p>
      <p>This is modal content</p>
      <p>This is modal content</p>
      <p>This is modal content</p>
      <p>ITCSS and BEMIT based Sass/CSS framework that is ultra exensible
        and scales to any project size.</p>
    </Modal>
  </div>
)

ModalExample.propTypes = {
  isOpen: T.bool,
  close: T.func,
}

export default ModalExample
