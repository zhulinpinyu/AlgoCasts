const chunk = require('./index');

test('chunk函数是否定义', () => {
  expect(typeof chunk).toEqual('function');
});

test('10个元素的数组，按2个一组进行分组', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk(arr, 2);

  expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('3个元素的数组，按1个一组进行分组', () => {
  const arr = [1, 2, 3];
  const chunked = chunk(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test('5个元素的数组，按3个一组进行分组', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk(arr, 3);

  expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
})

test('13个元素的数组，按5个一组进行分组', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = chunk(arr, 5)

  expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
})

test('5个元素的数组，按10个一组进行分组', () => {
  const arr = [1, 2, 3, 4, 5]
  const chunked = chunk(arr, 10)

  expect(chunked).toEqual([[1, 2, 3, 4, 5]])
})
