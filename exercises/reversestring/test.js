const reverse = require('./index')

test('函数是否定义', () => {
  expect(reverse).toBeDefined()
})

test('字符串反转', () => {
  expect(reverse('mlx')).toEqual('xlm')
})

test('带有空格的字符串反转', () => {
  expect(reverse('   m  lx ')).toEqual(' xl  m   ')
})
