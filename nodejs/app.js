http = require("http");

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world');
}).listen(1337, '127.0.0.1');

/*function sumDigPow(a, b) {
    let result = [];
    for (let i=a; i<=b; i++) {
        let nToStr = String(i);
        let factorOf = 0;
        for (let n=0; n<nToStr.length; n++) {
            let chAtPos = Number(i.charAt(n));
            factorOf += Math.pow(Number(i[n]), n+1);
        }
        if (factorOf == i) {
            result.push(Number(i));
        }
    }
    console.log(result);
}

sumDigPow(1, 10);*/
