import test from 'ava'
import api from '../src/api'

test('应该包含post()', t => {
  t.is(typeof api.post, 'function')
})

test('post()应该返回Promise', t => {
  t.is(typeof api.post().then, 'function')
})

test('resolve()应该返回{item:1}', t => {
  // 测试异步操作的时候要return  
  return api.post().then(value => {
    t.deepEqual(value, {
      item: 1
    })
  })
})
