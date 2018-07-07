<<<<<<< HEAD

var end = "";
var start = "";
var q = "";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "30f28f2e13fa4042b9e48c3e0f149fbe",
  'q': q,
  'begin_date': start,
  'end_date': end,
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
=======
$(document).ready(function(){











    
})
>>>>>>> bf149819bed0cac0c54f4012c789808024381c62
