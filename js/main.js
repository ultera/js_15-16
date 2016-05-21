"use strict";

$(function() {

  var $btnSearch = $(".search__btn");

  $btnSearch.on("click", function() {
    var searchStr = $(".search__input").val();
    if (!searchStr) {return;}

    localStorage.setItem("js1516searchstr", searchStr);
    location.href = "request.html";
  });

  $(".search__input").keypress(function(e) {
    if(e.which == 13) {
      $btnSearch.click();
    }
  });

})
