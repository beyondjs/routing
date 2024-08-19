import * as routing from 'http://localhost:1010/routing.js';
(async () => {
	console.log(20, routing);
	// const routing = await import('http://localhost:1010/routing.js');
	globalThis.routing = routing;
})();
