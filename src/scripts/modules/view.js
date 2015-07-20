var helper = require('./helper.js');

var view = module.exports = {

  init: function() {
    view.showCountdown();
    view.registerClick();
  },

  /* display the event countdown */
  showCountdown: function() {
    var diff = helper.dateDiff();

    document.querySelector('#years').innerHTML = diff.years;
    document.querySelector('#days').innerHTML = diff.days;
    document.querySelector('#hours').innerHTML = diff.hours;
  },

  /* register a click handler for each menu list item */
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

  /* visibly update the menu item count */
  updateCount: function() {
    var item = helper.getCurrent();
    var li = document.querySelector('[data-id="' + item.id + '"]');//$('li[data-id=' + item.id + ']');
    var count = li.querySelector('.menu-count');

    count.innerHTML = item.count;
  }

};
