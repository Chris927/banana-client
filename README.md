# What is it?

Test HTTP client for demonstration purposes.

# How to Run

Ensure [NodeJS](http://nodejs.org/download/) version 0.10.24 or newer is installed.

```
npm install
node index.js -r 20 http://your-server.your-domain
```

This will issue HTTP requests to the given URL, at a rate specified by the -r
option. Run `node index.js -h` to get help for other command line options.
