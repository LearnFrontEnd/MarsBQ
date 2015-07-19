var helper = require('./helper.js')

var view = module.exports = {

  init: function() {
    view.showCountdown();
  },

  showCountdown: function() {
    var diff = helper.dateDiff();

    document.querySelector('#years').innerHTML = diff.years;
    document.querySelector('#days').innerHTML = diff.days;
    document.querySelector('#hours').innerHTML = diff.hours;
  }

};
