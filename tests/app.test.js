const { greet } = require('../src/index');

test('should greet properly', () => {
  expect(greet('Ritika')).toBe('Hello, Ritika!');
});
