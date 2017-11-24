const reverseInt = require('./index');

test('reverseInt 函数是否定义', () => {
  expect(reverseInt).toBeDefined();
});

test('反转0', () => {
  expect(reverseInt(0)).toEqual(0);
});

test('反转正整数', () => {
  expect(reverseInt(5)).toEqual(5);
  expect(reverseInt(15)).toEqual(51);
  expect(reverseInt(90)).toEqual(9);
  expect(reverseInt(2359)).toEqual(9532);
});

test('反转负整数', () => {
  expect(reverseInt(-5)).toEqual(-5);
  expect(reverseInt(-15)).toEqual(-51);
  expect(reverseInt(-90)).toEqual(-9);
  expect(reverseInt(-2359)).toEqual(-9532);
});

test('反转非整数', () => {
  expect(
    () => reverseInt('-5')
  )
  .toThrowError('该函数参数必须为整数')
})