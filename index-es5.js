var eventEmitter = require('events').EventEmitter;
var util = require('util');

function Logger() {
  var me = this;
  this.on('Before', function(data) {
    console.log('Before Called', data);
  });
  this.on('After', function(data) {
    console.log('After Called', data);
  });
  this.log = function (event, msg) {
    me.emit(event, msg);
  }
  return this;
}

util.inherits(Logger, eventEmitter);

var lp = new Logger();

lp.log('Before', 1);
console.log('Processing', 2);
lp.log('After', 3);