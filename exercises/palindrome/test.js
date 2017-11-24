const palindrome = require('./index');

test('检测回文函数是否定义', () => {
  expect(typeof palindrome).toEqual('function')
  //或者
  //expect(palindrome).toBeDefined()
})

test('"aba"是回文', () => {
  expect(palindrome('aba')).toBeTruthy()
})

test('" aba"不是回文', () => {
  expect(palindrome(' aba')).toBeFalsy()
})

test('"aba "不是回文', () => {
  expect(palindrome('aba ')).toBeFalsy()
})

test('"greetings"不是回文', () => {
  expect(palindrome('greetings')).toBeFalsy()
})

test('"1000000001"是回文', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif"不是回文', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep"是回文', () => {
  expect(palindrome('pennep')).toBeTruthy();
});
