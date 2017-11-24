const maxChar = require('./index');

test('maxChar函数是否定义', () => {
  expect(typeof maxChar).toEqual('function');
});

test('找出使用频率最高的字符', () => {
  //expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('找出使用频率最高的数字字符', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});
