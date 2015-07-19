var countdown = require('countdown');

var model = {
  init: function(){
    console.log('Model initialized');
  },

  /* current and future dates */
  currentDate: new Date(),
  eventDate: new Date(2056, 10, 05)
};

var helper = {

  dateDiff: function() {
    return countdown(model.currentDate, model.eventDate);
  }

};

var view = {

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

var app = {
  init: function() {
    model.init();
    view.init();
  }
};

app.init();
