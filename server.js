var http = require('http');
const mayTinh = require('./caculator');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
    const reqUrl = url.parse(req.url, true);
    const pathname = reqUrl.pathname.trim();

    if (pathname == "/") {
        fs.readFile('home.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
    else if (pathname === '/calculate' && reqUrl.query.num1 && reqUrl.query.num2) {
        const num1 = parseFloat(reqUrl.query.num1);
        const num2 = parseFloat(reqUrl.query.num2);

        const operation = reqUrl.query.operation;

        let result;
        switch (operation) {
            case 'cong':
                result = mayTinh.phepCong(num1, num2)
                break;
            case 'tru':
                result = mayTinh.phepTru(num1, num2)
                break;
            case 'nhan':
                result = mayTinh.phepNhan(num1, num2)
                break;
            case 'chia':
                result = mayTinh.phepChia(num1, num2)
            default:
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Invalid operation');
                return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`Result: ${result}`);
    } else {
        console.log('Page not Found')
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }

}).listen(8000);