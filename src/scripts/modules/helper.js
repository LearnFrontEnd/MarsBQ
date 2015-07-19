var countdown = require('countdown');
var model = require('./model');

var helper = module.exports = {

  dateDiff: function() {
    return countdown(model.currentDate, model.eventDate);
  }

};
