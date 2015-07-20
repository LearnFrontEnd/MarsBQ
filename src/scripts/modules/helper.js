var countdown = require('countdown');
var model = require('./model');

var helper = module.exports = {

  /* calculate the date difference */
  dateDiff: function() {
    return countdown(model.currentDate, model.eventDate);
  },

  /* set the currently selected menu item */
  setCurrent: function(id) {
    for (var i = 0; i < model.menu.length; i++) {
      if (model.menu[i].id === id) {
        model.menuItem = model.menu[i];
      }
    }
  },

  /* get the current menu item */
  getCurrent: function() {
    return model.menuItem;
  },

  /* increment the menu item */
  increment: function() {
    model.menuItem.count++;
  }

};
