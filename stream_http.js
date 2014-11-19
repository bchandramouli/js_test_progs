var http= require("http");
http.createServer(function (req, res) {
	var url = "https://google.com"
	var body = "<span>Redirecting to <a href='" + url + "'>" + url + "</a></span>";

	res.writeHead(302, {
		"Location": url,
		"Content-Length": body.length,
		"Content-Type": "text/html"});


	res.write(body);

	setTimeout(function () {
		res.end();
	}, 2000);

}).listen(8000);