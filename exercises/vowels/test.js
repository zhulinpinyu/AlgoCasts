const vowels = require('./index');

test('Vowels is a function', () => {
  expect(typeof vowels).toEqual('function');
});

test('returns the number of vowels used', () => {
  expect(vowels('aeiou')).toEqual(5);
});

test('returns the number of vowels used when they are capitalized', () => {
  expect(vowels('AEIOU')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test("vowels('Why do you ask?') 含有4个元音字母", () => {
  expect(vowels('Why do you ask?')).toEqual(4)
})

test('returns the number of vowels used', () => {
  expect(vowels('bcdfghjkl')).toEqual(0);
});
