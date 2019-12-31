const eventEmitter = require('events');

class Logger extends eventEmitter {
  constructor() {
    super();
    this.on('Before', (data) => {
      console.log('Before Called', data);
    });
    
    this.on('After', (data) => {
      console.log('After Called', data);
    });
  }

  log(event, msg) {
    this.emit(event, msg);
  }
}

const lp = new Logger();

lp.log('Before', 1);
console.log('Processing', 2);
lp.log('After', 3);