var assert = require('assert');
var helper = require('../src/scripts/modules/helper.js');
var model = require('../src/scripts/modules/model.js');

model.menuItem = {
  "title": "Veggie Burger",
  "count": 257,
  "id": 1
};

describe('Helper Tests', function() {

  describe('increment', function () {
    it('should increment the menu item', function () {
      helper.increment()
      assert.equal(model.menuItem.count, 258);
    });
  });

});
