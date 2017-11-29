const anagrams = require('./index.js');

test('anagrams函数是否定义', () => {
  expect(typeof anagrams).toEqual('function');
});

test('"hello"和"llohe"由相同的字符组成', () => {
  expect(anagrams('hello', 'llohe')).toBeTruthy();
});

test('"Whoa! Hi!"和"Hi! Whoa!"由相同的字符组成', () => {
  expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"One One"和"Two two two"由不同的字符组成', () => {
  expect(anagrams('One One', 'Two two two')).toBeFalsy();
});

test('"One one"和"One one c"由不同的字符组成', () => {
  expect(anagrams('One one', 'One one c')).toBeFalsy();
});

test('"A tree, a life, a bench"和"A tree, a fence, a yard"由不同的字符组成', () => {
  expect(
    anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
  ).toBeFalsy();
});
