var http= require("http");
http.createServer(function (req, res) {
	var url = "https://google.com"
	var body = "<span>Redirecting to <a href='" + url + "'>" + url + "</a></span>";

	res.setHeader("Location", url);
	res.statusCode = 302;
	res.setHeader("Content-Length", body.length);
	res.setHeader("Content-Type", "text/html");

	res.write(body);

	setTimeout(function () {
		res.end();
	}, 2000);

}).listen(8000);