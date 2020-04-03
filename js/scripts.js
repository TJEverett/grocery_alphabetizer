var listSize = 2;
var listIds = ["item1", "item2"];

var emptyCheck = function(){
  var test = "item";
  var result = "full";
  listIds.forEach(function(listitem){
    test = jQuery("input#" + listitem).val();
    if (test === ""){
      result = "empty";
    };
  });
  if (result = "empty"){
    return true;
  } else if (result = "full"){
    return false;
  }
};

var addItem = function(){
  listSize = listSize + 1;
  listIds.push("item" + listSize);
  var newItem = '<div class="form-group"><label for="' + listIds[listSize] + '">Item ' + listSize + ':</label><input type="text" class="form-control" id="' + listIds[listSize] + '"></div>';
  jQuery(".items").append(newItem);
};




jQuery(document).ready(function(){
  jQuery("#new").click(function(event){
    event.preventDefault();
    addItem();
    // add new list item
  })

  jQuery("#groceryForm").submit(function(event){
    event.preventDefault();
    var empty = emptyCheck();
    // alphabetize list and return
  });





});