const mock = jest.fn().mockImplementation((func, delay) => {
  const callImmediately = (...args) => func(...args);
  callImmediately.cancel = jest.fn();
  callImmediately.flush = jest.fn();
  return callImmediately;
});

export default mock;
