var Signals = require('signals');

var Store = function(spec) {
  var signal = new Signals.Signal();

  spec.register = function(callback) {
    signal.add(callback);
    return function() {
      signal.remove(callback);
    };
  };

  spec.dispatch = function() {
    signal.dispatch();
  };

  return spec;
};

module.exports = Store;
