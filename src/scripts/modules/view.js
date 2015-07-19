var helper = require('./helper.js');

/* export the view */
var view = module.exports = {

  init: function() {
    view.registerClick();
    view.showCountdown();
  },

  /* register a click handler for each item in the menu list */
  registerClick: function() {
    var id;
    var listItem = document.querySelectorAll('#menu li');

    for(var i = 0; i < listItem.length; i++) {
      listItem[i].addEventListener('click', function(){
        id = this.getAttribute('data-id');
        // add + to make sure the value is an integer
        helper.setCurrent(+id);
        helper.increment();
        view.updateCount();
      });
    }
  },

  /* visually update the menu item count after clicks */
  updateCount: function() {
    var item = helper.getCurrent();
    var li = document.querySelector('[data-id="' + item.id + '"]');//$('li[data-id=' + item.id + ']');
    var count = li.querySelector('.menu-count');

    count.innerHTML = item.count;
  },

  /* display a countdown to the event */
  showCountdown: function() {
    var diff = helper.dateDiff();

    document.querySelector('#year').innerHTML = diff.years;
    document.querySelector('#days').innerHTML = diff.days;
    document.querySelector('#hours').innerHTML = diff.hours;
  }

};
