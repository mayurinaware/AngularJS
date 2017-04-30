(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController1', ShoppingListController1)
.controller('ShoppingListController2', ShoppingListController2)
.service('ShoppingListService', ShoppingListService);

ShoppingListController1.$inject = ['ShoppingListService'];
function ShoppingListController1(ShoppingListService) {
  var item = this;

  item.items = ShoppingListService.getItems();

    item.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
};

}
ShoppingListController2.$inject = ['ShoppingListService'];
function ShoppingListController2(ShoppingListService) {
  var showList = this;

  showList.broughtlist = ShoppingListService.getbroughtItems();
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [{ name: "cookie", quantity: 10 }, { name: "biscuits", quantity: 12 }, { name: "cake", quantity: 30 },{ name: "nachos", quantity: 10 },{ name: "popcorn", quantity: 10 }];
  var broughtlist = [];



  service.removeItem = function (itemIdex) {
    
    var item = items[itemIdex];
    var additem ={
       name: item.name,
      quantity: item.quantity
    };

    broughtlist.push(additem);
    console.log(broughtlist);
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getbroughtItems = function () {
    return broughtlist;
  };


}

})();
