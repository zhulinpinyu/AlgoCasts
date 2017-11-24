const fizzBuzz = require('./index');

test('fizzBuzz函数是否定义', () => {
  expect(fizzBuzz).toBeDefined();
});

test('输入参数为5, 打印输出5条语句', () => {
  fizzBuzz(5);
  expect(console.log.mock.calls.length).toEqual(5);
});

test('输入参数为15,打印预期输出', () => {
  fizzBuzz(15);

  expect(console.log.mock.calls[0][0]).toEqual(1);
  expect(console.log.mock.calls[1][0]).toEqual(2);
  expect(console.log.mock.calls[2][0]).toEqual('fizz');
  expect(console.log.mock.calls[3][0]).toEqual(4);
  expect(console.log.mock.calls[4][0]).toEqual('buzz');
  expect(console.log.mock.calls[5][0]).toEqual('fizz');
  expect(console.log.mock.calls[6][0]).toEqual(7);
  expect(console.log.mock.calls[7][0]).toEqual(8);
  expect(console.log.mock.calls[8][0]).toEqual('fizz');
  expect(console.log.mock.calls[9][0]).toEqual('buzz');
  expect(console.log.mock.calls[10][0]).toEqual(11);
  expect(console.log.mock.calls[11][0]).toEqual('fizz');
  expect(console.log.mock.calls[12][0]).toEqual(13);
  expect(console.log.mock.calls[13][0]).toEqual(14);
  expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz');
});

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});
