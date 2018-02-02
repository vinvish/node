var http = require('http');
app.set('port', process.env.PORT || 8000);
app.set('host', process.env.HOST || '13.126.182.198');
http.createServer(app).listen(app.get('port'), app.get('host'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
