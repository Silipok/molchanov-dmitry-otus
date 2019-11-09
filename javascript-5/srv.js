const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    let createTime=new Date();
    setTimeout(()=> {
        let sendTime=new Date();
        return res.end(`I'm packet was create ${createTime.toString()} and was send ${sendTime.toString()} different ${Math.abs(sendTime.getMilliseconds()-createTime.getMilliseconds())}\n`);
    },500)
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});