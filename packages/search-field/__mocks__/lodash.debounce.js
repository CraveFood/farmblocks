const mock = jest.fn().mockImplementation((func, delay) => {
  const callImmediately = jest.fn().mockImplementation(func);
  callImmediately.cancel = jest.fn();
  callImmediately.flush = jest.fn();
  return callImmediately;
});

export default mock;
