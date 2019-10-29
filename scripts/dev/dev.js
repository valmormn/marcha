
const chokidar = require('chokidar');

// let watcher = chokidar.watch('.', {disableGlobbing: true, usePolling: false});

// watcher.on('ready', () => {
//   console.log("ready!");
//   watcher.close();
// });

// Watch changes in src directory
// chokidar
//   .watch('./src')
//   .on('all', (event, path) => {
//     console.log(event, path);
//     // clear();
//   });

const phpServer = require('php-server');

(async () => {
	const server = await phpServer();
	console.log(`PHP server running at ${server.url}`)
})();
