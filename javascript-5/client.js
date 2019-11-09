const http = require('http')
const options = {
    hostname: '127.0.0.1',
    port: 8080,
    path: '/',
    method: 'GET'
}
const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', (d) => {
        process.stdout.write(d+`\nafter we doing ddos\n\n`)
    })
});
req.on('error', (error) => {
    console.error(error)
});
req.end();

for (let i=1;i<100;i++){
    let masreq = http.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);
        res.on('data', (d) => {
            process.stdout.write(d+` ${i} packet\n`)
        })
    });
    masreq.on('error', (error) => {
        console.error(error)
    });
    masreq.end();
}