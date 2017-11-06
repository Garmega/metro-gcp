const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send("Hello from Firebase!");
});


exports.errorMirror = functions.https.onRequest((request, response) => {
	switch(request.method) {
		case 'GET':
			response.status(503).send(Object.keys(request))
			break;

		default:
			response.status(200).send(' (╯°□°）╯︵ ┻━┻. Please use GET followed by the status code you want thrown.')
			break;
	}
});