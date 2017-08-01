import React from 'react'

import Navbar from './Navbar'
import Link from './Link'
import Item from './Item'
import Nav from './Nav'
import LogoLink from './LogoLink'
import Overlay from './Overlay'
import Toggle from './Toggle'
import ToggleBars from './ToggleBars'
import Wrap from './Wrap'
import Dropdown from './Dropdown'
import DropdownToggle from './DropdownToggle'
import DropdownContent from './DropdownContent'

const config = [
  {
    path: '/',
    label: 'Space Time',
  }, {
    label: 'Galaxies',
    dropdown: [
      {
        path: '/',
        label: 'Milky Way',
      }, {
        path: '/',
        label: 'Andromeda',
      },
    ],
  }, {
    path: '/',
    label: 'Pulsars',
  }, {
    label: 'Black Holes',
    dropdown: [
      {
        path: '/',
        label: 'Supermassive',
      }, {
        path: '/',
        label: 'Quantum',
      },
    ],
  }, {
    path: '/',
    label: 'Supernovas',
  },
]

const MyNavbar = () => {
  const renderNavItems = items =>
    items.map(({ dropdown, label, path }) => (dropdown && dropdown.length
      ? (
        <Dropdown key={label}>
          <DropdownToggle>
            {label}
          </DropdownToggle>
          <DropdownContent>
            {renderNavItems(dropdown)}
          </DropdownContent>
        </Dropdown>
      )
      : (
        <Item key={label}><Link to={path}>{label}</Link></Item>
      )
    ))

  return (
    <Navbar>
      <Overlay />
      <Wrap>
        <Toggle>
          <ToggleBars />
        </Toggle>
        <LogoLink to="/">
          Nebula Components
        </LogoLink>
        <Nav>
          {renderNavItems(config)}
        </Nav>
      </Wrap>
    </Navbar>
  )
}

export default MyNavbar
