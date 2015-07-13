var $ = require('jquery');
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
    this.listItem = $('#menu li');

    this.listItem.click(function() {
      id = $(this).data('id');
      helper.setCurrent(id);
      helper.increment();
      view.updateCount();
    });
  },

  /* visually update the menu item count after clicks */
  updateCount: function() {
    var item = helper.getCurrent();
    var $li = $('li[data-id=' + item.id + ']');
    var $count = $li.find('.menu-count');

    $count.text(item.count);
  },

  /* display a countdown to the event */
  showCountdown: function() {
    var diff = helper.dateDiff();

    $('#year').text(diff.years);
    $('#days').text(diff.days);
    $('#hours').text(diff.hours);
  }

};
