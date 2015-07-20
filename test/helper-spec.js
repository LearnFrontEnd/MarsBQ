var assert = require('assert');
var helper = require('../src/scripts/modules/helper.js');
var model = require('../src/scripts/modules/model.js');

model.menuItem = {
  "title": "Veggie Burger",
  "count": 257,
  "id": 1
};

model.menu = [
  {
    "title": "Veggie Burger",
    "count": 257,
    "id": 1
  },
  {
    "title": "Tofu Dog",
    "count": 192,
    "id": 2
  }
];

describe('Helper Tests', function() {

  describe('increment', function () {
    it('should increment the menu item', function () {
      helper.increment();
      assert.equal(model.menuItem.count, 258);
    });
  });

  describe('set the current menu item', function () {
    it('should increment the menu item', function () {
      helper.setCurrent(2);
      assert.equal(model.menuItem.id, 2);
    });
  });

  describe('get the current menu item', function () {
    it('should increment the menu item', function () {
      helper.setCurrent(1);
      helper.getCurrent();
      assert.equal(model.menuItem.id, 1);
      helper.setCurrent(2);
      helper.getCurrent();
      assert.equal(model.menuItem.id, 2);
    });
  });

});
