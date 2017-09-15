import React from 'react'

import List from './List'
import Item from './Item'
import Link from './Link'

const LinkList = () => (
  <List>
    <Link to="/">Item 1</Link>
    <Item>
      <Link to="/">Item 1</Link>
      <Link to="/">Item 2</Link>
      <Link to="/">Item 3</Link>
    </Item>
    <Item>
      <Link to="/">Item 4</Link>
      <Link to="/">Item 5</Link>
      <Link to="/">Item 6</Link>
    </Item>
  </List>
)

export default LinkList
