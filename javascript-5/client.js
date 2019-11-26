/** Для установки параллельного режима необходимо передать при вызове параметр -р
 *  Для установки количества отправляемых пакетов передать параметр -с после которого число пакетов
 * например node client -p -c25
**/
const http = require('http');

let parallelMode = false;
let countPackage = 1;

process.argv.forEach(param => {
	if (param.includes('-p')) parallelMode = true;
	if (param.includes('-c')) countPackage = Number(param.slice(2));
});
console.log(`Parallel mode=${parallelMode}, count package=${countPackage}`);

const options = {
	hostname: '127.0.0.1',
	port: 8080,
	path: '/',
	method: 'GET',
};

if (!parallelMode) {
	for (let i = 1; i < countPackage+1; i++) {
		setTimeout(() => {
			const req = http.request(options, res => {
				console.log(`statusCode: ${res.statusCode}`);
				res.on('data', d => {
					process.stdout.write(d + `\nIt's ${i} sequential packet\n\n`);
				});
			});
			req.on('error', error => {
				console.error(error);
			});
			req.end();
		}, 3000);
	}
}

if (parallelMode) {
	for (let i = 1; i < countPackage; i++) {
		let masreq = http.request(options, res => {
			console.log(`statusCode: ${res.statusCode}`);
			res.on('data', d => {
				process.stdout.write(d + ` ${i} packet\n`);
			});
		});
		masreq.on('error', error => {
			console.error(error);
		});
		masreq.end();
	}
}