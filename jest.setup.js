global.window = global;
window.addEventListener = () => {};

let lastTime = 0;
window.requestAnimationFrame = function(callback, element) {
  var currTime = new Date().getTime();
  var timeToCall = Math.max(0, 16 - (currTime - lastTime));
  var id = window.setTimeout(function() {
    callback(currTime + timeToCall); // eslint-disable-line standard/no-callback-literal
  }, timeToCall);
  lastTime = currTime + timeToCall;
  return id;
};
