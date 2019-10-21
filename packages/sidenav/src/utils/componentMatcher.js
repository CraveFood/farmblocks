export default Component => c => {
  if (c?.type === Component) {
    return true;
  }

  if (c?.props && c?.props?.componentType === Component) {
    return true;
  }

  return false;
};
