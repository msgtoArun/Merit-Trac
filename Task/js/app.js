const http = new easyHTTP;

// Get Posts
http.get('/json/retrive.json', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    var obj = JSON.parse(posts);
    console.log(obj);
  }
});