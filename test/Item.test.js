import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import Item from '../src/Item'

test('应该返回一个div元素', t => {
  const w = shallow(<Item/>)
  t.is(w.type(), 'div')
})

test('.title', t => {
  t.fail()
})

test('.price', t => {
   t.fail()
})

test('.desc', t => {
   t.fail()
})

test('a', t => {
   t.fail()
})

test('click', t => {
   t.fail()
})
