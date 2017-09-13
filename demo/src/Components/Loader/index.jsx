import React from 'react'
import T from 'prop-types'
import loading from '../../icons/loading.svg'
import Icon from '../Icon'

const Loader = ({ fill = '8bc34a', size = 400 }) => (
  <Icon icon={loading} fill={fill} width={`${size}px`} height={`${size}px`}>
    Hello
  </Icon>
)

Loader.propTypes = {
  fill: T.string,
  size: T.number,
}

export default Loader
