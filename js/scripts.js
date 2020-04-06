var listSize = 2;
var listIds = ["item1", "item2"];

var emptyCheck = function(){
  var test = "item";
  var result = "full";
  listIds.forEach(function(listItem){
    test = jQuery("input#" + listItem).val();
    console.log(test);
    if (test === ""){
      console.log(true)
      result = "empty";
    };
  });
  if (result === "empty"){
    return true;
  } else if (result === "full"){
    return false;
  }
};

var addItem = function(){
  listSize = listSize + 1;
  listIds.push("item" + listSize);
  var newId = listIds[listSize - 1]
  var newItem = '<div class="form-group"><label for="' + newId + '">Item ' + listSize + ':</label><input type="text" class="form-control" id="' + newId + '"></div>';
  jQuery(".items").append(newItem);
};

jQuery(document).ready(function(){
  jQuery("#new").click(function(event){
    event.preventDefault();
    addItem();
  });

  jQuery("#groceryForm").submit(function(event){
    event.preventDefault();
    var listItems = [];
    var empty = emptyCheck();

    if (empty === false){
      listIds.forEach(function(id){
        var listItem = jQuery("input#" + id).val();
        listItems.push(listItem);
      });
      listItems.sort();
      jQuery(".listReturn ul").text("");
      listItems.forEach(function(item){
        jQuery(".listReturn ul").append("<li>" + item + "</li>");
      });
    } else {
      alert("Please fill in all items");
    };
  });
});