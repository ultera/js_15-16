"use strict";

$(function() {

  var searchStr = localStorage.getItem("js1516searchstr");
  var searchInput = $(".search__input").val(searchStr);

  doSearch(searchStr);

  $(".search__btn").on("click", function() {
    var searchStr = $(".search__input").val();
    if (!searchStr) {return;}

    doSearch(searchStr);
  });
});

function doSearch(searchStr) {
  var username = "bSvysKzKZrDX7ZoI5KVuE8PoFpOdHrpDMWZdmpmp0dY";
  var password = "bSvysKzKZrDX7ZoI5KVuE8PoFpOdHrpDMWZdmpmp0dY";
  $.ajax({
    url: "https://api.datamarket.azure.com/Bing/Search/v1/Composite?Sources=%27web%27&Options=%27EnableHighlighting%27&Query=%27" + searchStr + "%27",
    dataType : "json",
    async: true,
    beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', "Basic " + btoa(username + ":" + password));
    },
    success: function(data) {

      var $content = $(".content");

      $content.empty();

      $.each(data.d.results[0].Web, function(i, val) {

        var title = val.Title.replace(/\uE000/g,"<strong>");
        title = title.replace(/\uE001/g,"</strong>");

        var url = val.DisplayUrl.replace(/\uE000/g,"<strong>");
        url = url.replace(/\uE001/g,"</strong>");

        var description = val.Description.replace(/\uE000/g,"<strong>");
        description = description.replace(/\uE001/g,"</strong>");

        var arr = [
          {title: title,
          url: url,
          description: description}
        ]
        $("#tmpl").tmpl(arr).appendTo($content);
      });
    }
  });
}
