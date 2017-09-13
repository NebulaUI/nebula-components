import { createElement as E } from 'react'
import T from 'prop-types'

const isObject = val => typeof val === 'object'

const fromString = (str, segment) => `${str} ${segment}`

const fromObject = (str, segment) => {
  const head = Object.values(segment)[0]

  if (!head) {
    return str
  }

  return `${str} ${Object.keys(segment)[0]}`
}

const appendClassName = (str, segment) => {
  if (isObject(segment)) {
    return fromObject(str, segment)
  }

  return fromString(str, segment)
}

const toClassName = (existingClassName, nextClassName) => {
  if (!nextClassName) {
    return existingClassName
  }

  return appendClassName(existingClassName, nextClassName)
}

const classNames = (...args) => args.reduce(toClassName)


const Icon = ({
  tag,
  width,
  height,
  iconLeft,
  iconRight,
  verticalAlign,
  className,
  children,
  fill,
  icon: { id, viewBox },
}) =>
  E(
    tag || 'div',
    {
      className: classNames('c-icon', className),
    },
    children && iconRight && E('span', { className: 'c-icon__text', style: { verticalAlign } }, children),
    E(
      'svg',
      {
        viewBox,
        className: classNames('c-icon__svg', { 'c-icon__svg--left': iconLeft }, { 'c-icon__svg--right': iconRight }),
        role: 'presentation',
        style: { width, height, verticalAlign, fill },
      },
      E(
        'use',
        { xlinkHref: `#${id}` },
        null,
      ),
    ),
    children && iconLeft && E('span', { className: 'c-icon__text', style: { verticalAlign } }, children),
  )

Icon.propTypes = {
  icon: T.shape({
    id: T.string.isRequired,
    viewBox: T.string.isRequired,
  }).isRequired,
  tag: T.string,
  width: T.string,
  height: T.string,
  iconLeft: T.bool,
  iconRight: T.bool,
  verticalAlign: T.string,
  className: T.string,
  children: T.node,
  fill: T.string,
}

export default Icon
