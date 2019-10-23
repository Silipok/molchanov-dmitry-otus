const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
let timeStartReq;
let timeEndReq;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin','*');
    timeStartReq=new Date();
    setTimeout(()=>{
        timeEndReq=new Date();
        console.log(`I'm request startms=${timeStartReq.getMilliseconds()} and endms=${timeEndReq.getMilliseconds()}`);
        let diff=timeEndReq.getMilliseconds()-timeStartReq.getMilliseconds();
        let msg=`Your request started ${timeStartReq.toString()} and was sent to you from server ${timeEndReq.toString()} time to work=${Math.abs(diff)}`;
        res.end(msg);
    },500);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
