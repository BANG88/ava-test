import test from 'ava'
import Index from '../src/'

test('Index应该是一个方法', t => {
  t.is(typeof Index, 'function')
})

test('Index()应该返回一个字符串', t => {
  var ret = Index()
  t.is(typeof ret, 'string')
})

test('Index("你好")应该等于你好', t => {
  var ret = Index('你好')
  t.is(ret, '你好')
})
