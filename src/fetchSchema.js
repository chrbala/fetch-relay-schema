var fetch = require('node-fetch');
var graphQlutilities = require('graphql/utilities');

var url = process.argv[2];

var checkSuccess = res => {
	if (!res.ok)
		throw new Error(res);
	return res;
}
var success = response => response.json().then(json => console.log(JSON.stringify(json)));
var error = err => {
	console.log(err.message);
	process.exit(1);
}

fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'query': graphQlutilities.introspectionQuery}),
  })
	.then(checkSuccess)
	.then(success)
	.catch(error)
;