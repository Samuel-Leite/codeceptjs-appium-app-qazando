var randomNumber = require('random-number');

const getCode = () => {
    var options = {
        min:  0, max:  1000, integer: true
      }

      return randomNumber(options);
}

exports.getCode = getCode