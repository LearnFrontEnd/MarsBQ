var model = require('./model.js');
var countdown = require('countdown');

var helper = module.exports = {

  /* set the current menu item */
  setCurrent: function(id) {
    for (var i = 0; i < model.menu.length; i++) {
      if (model.menu[i].id === id) {
        model.menuItem = model.menu[i];
      }
    }
  },

  /* increment the menu item */
  increment: function() {
    model.menuItem.count++;
  },

  /* get the current menu item */
  getCurrent: function() {
    return model.menuItem;
  },

  /* calculate the date difference */
  dateDiff: function() {
    return countdown(model.currentDate, model.eventDate);
  }

};
