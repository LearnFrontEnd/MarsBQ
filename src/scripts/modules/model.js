var request = require('superagent');

var model = module.exports = {

  /* initialize */
  init: function() {
    model.getData();
  },

  /* menu is empty until data is fetched */
  menu: {},

  /* model for the current menu item */
  menuItem: {
    title: null,
    count: null,
    id: null
  },

  /* get the data */
  getData: function() {
    request.get('menu.json', function(err, res) {
      model.menu = JSON.parse(res.text).menuItems;
    })
  },


  /* current and future dates */
  currentDate: new Date(),
  eventDate: new Date(2056, 10, 05)

};
