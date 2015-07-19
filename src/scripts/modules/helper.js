var countdown = require('countdown');
var model = require('./model');

var helper = module.exports = {

  dateDiff: function() {
    return countdown(model.currentDate, model.eventDate);
  },

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

  getCurrent: function() {
    return model.menuItem;
  }

};
