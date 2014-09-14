var program = require('commander'),
    request = require('request');

program
  .option('-m, --method <httpMethod>', 'method (e.g. GET) to be used for requests', 'GET')
  .option('-r, --rate <requestsPerSecondAverage>', 'set the request rate', 1);

program.command('*')
  .action(function(url) {
    console.log('rate', program.rate);
    var requestCount = 0;
    sendRequest();
    function sendRequest() {
      setTimeout(function() {
        sendRequest();
      }, 1000.0 / program.rate * 2 * Math.random());
      console.log('%s request %d to %s', program.method, requestCount++, url);
      var start = new Date().getTime();
      request({
        url: url,
        method: program.method
      }, function(err, response, body) {
        console.log('time taken: %dms', (new Date().getTime() - start));
        if (err) console.error(err);
      });
    }
  });

program.parse(process.argv);
