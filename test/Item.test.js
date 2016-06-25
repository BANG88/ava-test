import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'

import Item from '../src/Item'

test('应该返回一个div元素', t => {
  const w = shallow(<Item/>)
  t.is(w.type(), 'div')
})

// http://airbnb.io/enzyme/docs/api/selector.html
// selector
test('.title', t => {
  const w = shallow(<Item/>)
  t.is(w.find('.title').length, 1)
})

test('.price', t => {
  const w = shallow(<Item/>)
  t.is(w.find('.price').text(), '$200.00')
})

test('.desc', t => {
  const w = shallow(<Item/>)
  t.is(w.find('.desc').type(), 'p')
})

test('a', t => {
  const w = shallow(<Item/>)
  t.is(w.find('a[href="/item/1"]').length, 1)
})

test('click', t => {
  const w = shallow(<Item/>)
  t.is(w.find('.clicked').text(), '')
  w.find('button').simulate('click')
  t.true(w.state().clicked)
  t.is(w.find('.clicked').text(), 'clicked')
})
