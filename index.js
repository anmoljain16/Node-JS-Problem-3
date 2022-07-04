
const http = require('http');
const url = require ("url");

http.createServer(function (req, res) {
  const queryObject = url.parse(req.url,true).query;
    console.log(queryObject);
    if (queryObject.metric === "area")
    {
        let area = 3.14 * queryObject.radius * queryObject.radius;
        res.write("Area of Circle "+area);
        console.log("Area of Circle "+area);
    }
    else if (queryObject.metric === "volume")
    {
        let volume = 4/3 * 3.14 * queryObject.radius * queryObject.radius * queryObject.radius;
        volume = volume.toFixed(2);
        res.write("volume of spere "+volume);
        console.log("volume of spere "+volume);
    }
    res.end();

}).listen(8080);
